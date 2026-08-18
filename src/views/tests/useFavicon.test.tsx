import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useFavicon, { createTextFavicon } from "../../hooks/useFavicon";

type MockContext = {
  drawImage: ReturnType<typeof vi.fn>;
  beginPath: ReturnType<typeof vi.fn>;
  arc: ReturnType<typeof vi.fn>;
  fill: ReturnType<typeof vi.fn>;
  fillRect: ReturnType<typeof vi.fn>;
  fillText: ReturnType<typeof vi.fn>;
  scale: ReturnType<typeof vi.fn>;
  fillStyle: string;
  font: string;
  textAlign: string;
  textBaseline: string;
};

function createContext(): MockContext {
  return {
    drawImage: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    fillRect: vi.fn(),
    fillText: vi.fn(),
    scale: vi.fn(),
    fillStyle: "",
    font: "",
    textAlign: "",
    textBaseline: "",
  };
}

class MockImage {
  naturalWidth = 32;
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  srcValue = "";
  shouldFail = false;

  set src(value: string) {
    this.srcValue = value;
    queueMicrotask(() => {
      if (this.shouldFail) this.onerror?.();
      else this.onload?.();
    });
  }
}

describe("useFavicon", () => {
  let context: MockContext;
  let getContext: ReturnType<typeof vi.spyOn>;
  let toDataURL: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    document.head.replaceChildren();
    context = createContext();
    getContext = vi
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockReturnValue(context as unknown as CanvasRenderingContext2D);
    toDataURL = vi
      .spyOn(HTMLCanvasElement.prototype, "toDataURL")
      .mockReturnValue("data:image/png;base64,badged");
    vi.stubGlobal("Image", MockImage);
  });

  afterEach(() => {
    document.head.replaceChildren();
    getContext.mockRestore();
    toDataURL.mockRestore();
    vi.unstubAllGlobals();
  });

  it("sets a plain favicon and removes previous icon links", () => {
    const oldLink = document.createElement("link");
    oldLink.rel = "shortcut icon";
    oldLink.href = "/old.ico";
    document.head.append(oldLink);

    renderHook(() => useFavicon("/new.ico"));

    const icons = document.head.querySelectorAll("link[rel*='icon']");
    expect(icons).toHaveLength(1);
    expect(icons[0]?.getAttribute("href")).toBe("/new.ico");
    expect(icons[0]?.getAttribute("type")).toBe("image/png");
  });

  it("creates a badged favicon and caps numeric content at 99+", async () => {
    renderHook(() => useFavicon("/source.png", 150));

    await waitFor(() =>
      expect(document.head.querySelector<HTMLLinkElement>("link[rel='icon']")?.href).toContain(
        "data:image/png;base64,badged"
      )
    );

    expect(context.drawImage).toHaveBeenCalled();
    expect(context.arc).toHaveBeenCalled();
    expect(context.fillText).toHaveBeenCalledWith(
      "99+",
      expect.any(Number),
      expect.any(Number)
    );
  });

  it("falls back to the source icon when badge image loading fails", async () => {
    class FailingImage extends MockImage {
      shouldFail = true;
    }
    vi.stubGlobal("Image", FailingImage);

    renderHook(() => useFavicon("/broken.png", { badge: { content: 1 } }));

    await waitFor(() =>
      expect(document.head.querySelector<HTMLLinkElement>("link[rel='icon']")?.href).toContain(
        "/broken.png"
      )
    );
    expect(context.fillText).not.toHaveBeenCalled();
  });

  it("updates the favicon when the source or badge changes", async () => {
    const { rerender } = renderHook(
      ({ url, count }) => useFavicon(url, count),
      { initialProps: { url: "/one.png", count: 1 } }
    );

    await waitFor(() => expect(context.fillText).toHaveBeenCalledWith(
      "1",
      expect.any(Number),
      expect.any(Number)
    ));
    rerender({ url: "/two.png", count: 2 });

    await waitFor(() =>
      expect(context.fillText).toHaveBeenCalledWith(
        "2",
        expect.any(Number),
        expect.any(Number)
      )
    );
  });

  it("creates a text favicon with configured canvas rendering", () => {
    let createdCanvas: HTMLCanvasElement | undefined;
    const createElement = vi.spyOn(document, "createElement").mockImplementation(
      ((tagName: string) => {
        const element = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          tagName
        );
        if (tagName === "canvas") {
          createdCanvas = element as HTMLCanvasElement;
        }
        return element;
      }) as typeof document.createElement
    );

    const dataUrl = createTextFavicon("A", {
      fontSize: 32,
      dpr: 2,
      bgColor: "#000",
      textColor: "#fff",
    });

    expect(dataUrl).toBe("data:image/png;base64,badged");
    expect(createdCanvas?.width).toBe(64);
    expect(createdCanvas?.height).toBe(64);
    expect(context.scale).toHaveBeenCalledWith(2, 2);
    expect(context.fillText).toHaveBeenCalledWith("A", 16, 16);
    createElement.mockRestore();
  });
});

export {};
