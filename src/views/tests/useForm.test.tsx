import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useForm from "../../hooks/useForm";

type FormValues = {
  name: string;
  email: string;
};

function createFormRef() {
  const form = document.createElement("form");
  form.innerHTML = `
    <input name="name" value="Alice" />
    <input name="email" value="alice@example.com" />
  `;
  document.body.append(form);
  return { current: form };
}

function createSchema(setters?: {
  name?: (value: string | undefined | null) => void;
  email?: (value: string | undefined | null) => void;
}) {
  return {
    name: {
      value: "",
      required: true,
      setter: setters?.name,
    },
    email: {
      value: "",
      required: true,
      validator: async (value?: string | null) =>
        value?.includes("@") ? undefined : "invalid email",
      setter: setters?.email,
    },
  };
}

describe("useForm", () => {
  afterEach(() => {
    document.body.replaceChildren();
    vi.restoreAllMocks();
  });

  it("reads all fields and selected fields from the form", () => {
    const formRef = createFormRef();
    const { result } = renderHook(() => useForm<FormValues>(createSchema(), formRef));

    expect(result.current.get("name")).toBe("Alice");
    expect(result.current.gets()).toEqual({
      name: "Alice",
      email: "alice@example.com",
    });
    expect(result.current.gets(["email"])).toEqual({
      email: "alice@example.com",
    });
  });

  it("calls field setters through set, sets, and reset", () => {
    const nameSetter = vi.fn();
    const emailSetter = vi.fn();
    const formRef = createFormRef();
    const { result } = renderHook(() =>
      useForm<FormValues>(createSchema({ name: nameSetter, email: emailSetter }), formRef)
    );

    act(() => {
      result.current.set("name", "Bob");
      result.current.sets({ email: "bob@example.com" });
      result.current.reset(["name"]);
    });

    expect(nameSetter).toHaveBeenNthCalledWith(1, "Bob");
    expect(emailSetter).toHaveBeenCalledWith("bob@example.com");
    expect(nameSetter).toHaveBeenNthCalledWith(2, undefined);
  });

  it("validates required and asynchronous custom rules", async () => {
    const formRef = createFormRef();
    const { result } = renderHook(() => useForm<FormValues>(createSchema(), formRef));
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);

    expect(await result.current.validate("name")).toBe(true);
    expect(await result.current.validate("email")).toBe(true);
    expect(await result.current.validates()).toBe(true);

    const email = formRef.current.querySelector<HTMLInputElement>("[name=email]");
    if (!email) throw new Error("email input not found");
    email.value = "invalid";

    expect(await result.current.validate("email")).toBe(false);
    expect(await result.current.validates(["email"])).toBe(false);
    expect(warn).toHaveBeenCalled();
  });

  it("does not submit when validation fails", async () => {
    const formRef = createFormRef();
    const { result } = renderHook(() =>
      useForm<FormValues>(createSchema(), formRef)
    );
    const handler = vi.fn();
    const email = formRef.current.querySelector<HTMLInputElement>("[name=email]");
    if (!email) throw new Error("email input not found");
    email.value = "invalid";

    await act(async () => {
      await result.current.onSubmit(handler, true)({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it("submits form data when validation succeeds", async () => {
    const formRef = createFormRef();
    const { result } = renderHook(() =>
      useForm<FormValues>(createSchema(), formRef)
    );
    const handler = vi.fn();

    await act(async () => {
      await result.current.onSubmit(handler, true)({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(handler).toHaveBeenCalledWith({
      name: "Alice",
      email: "alice@example.com",
    });
  });
});

export {};
