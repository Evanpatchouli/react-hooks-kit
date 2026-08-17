# <h1 align="center">react-hooks-kit</h1>

<p align="center">
  <a href="#"><img alt="version" src="https://img.shields.io/badge/latest-2.0.0-yellowgreen.svg"/></a>
  <a href="#"><img alt="npm" src="https://img.shields.io/badge/npm-√-yellowgreen.svg"></a>
  <a href="#"><img alt="react" src="https://img.shields.io/badge/react-18+-yellowgreen.svg"></a>
  <a href="#"><img alt="lisence" src="https://img.shields.io/badge/lisence-MIT-yellowgreen.svg"></a>
</p>
<p align="center">
  <img alt="logo" width="200" src="./public//hook.svg">
</p>

## Overeview

@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.

## Documentation

- [API - SEE AT GITHUB](https://evanpatchouli.github.io/react-hooks-kit/)

## Introduction

**react-hooks-kit** is an open source library focused on making it easy to use react hooks.

It includes a comprehensive collection of hooks that empower you to accomplish any task in your application without being forced into a specific way of doing things.

react-hooks-kit is a lightweight library. Feature-specific dependencies such as the QR scanner are loaded only when the feature is used.

## Advantages

- **<font color="#2196f3">Cosying</font>**: react-hooks-kit provides a simple API that makes it easy to use react hooks.
  Lightweight: feature-specific code is loaded on demand where possible.
- **<font color="#2196f3">Overall</font>**: It includes a comprehensive collection of hooks that empower you to accomplish different tasks in your application like store, parser, listeners, effects, etc.
- **<font color="#2196f3">Typescript support</font>**: It is developed with typescript and provides excellent typescript support and type inference support.
- **<font color="#2196f3">Innovation</font>**: It provides some innovative hooks like useWatch (partial listener), useRipple ([css houdini](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini) effect), etc.

## Screen color picking

`useEyeDropper` wraps the browser EyeDropper API and keeps the latest selected sRGB color in React state.

```tsx
import { useEyeDropper } from "@evanpatchouli/react-hooks-kit";

const ColorPicker = () => {
  const { isSupported, sRGBHex, open } = useEyeDropper({
    initialValue: "#ffffff",
  });

  return (
    <button disabled={!isSupported} onClick={() => void open()}>
      Pick color: {sRGBHex}
    </button>
  );
};
```

The native picker must be opened from a user interaction. `open` accepts an optional `AbortSignal`; user cancellation and other native errors reject the returned Promise. Unsupported browsers return `undefined` without opening a picker.

## QR code scanning

`useQrcodeScan` lazily loads `html5-qrcode`, owns a scanner per Hook instance, and supports live camera scanning, image decoding, normalized result metadata, camera permission state, torch, and zoom.

```tsx
import { useQrcodeScan } from "@evanpatchouli/react-hooks-kit";

const Scanner = () => {
  const scanner = useQrcodeScan();

  return (
    <section>
      <div id="qr-reader" />
      <button
        onClick={() => void scanner.start({ containerId: "qr-reader" })}
      >
        Start scanning
      </button>
      <button onClick={() => void scanner.stop()}>Stop scanning</button>
      <button
        disabled={!scanner.cameraCapabilities?.torch.supported}
        onClick={() => void scanner.setTorch(true)}
      >
        Enable torch
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          const file = event.currentTarget.files?.[0];
          if (file) {
            void scanner.scanImage(file, { maxFileSize: 8 * 1024 * 1024 });
          }
        }}
      />
      <p>{scanner.status}</p>
      <p>Camera permission: {scanner.cameraPermission}</p>
      {scanner.scanResult ? (
        <p>
          {scanner.scanResult.text} ({scanner.scanResult.source})
        </p>
      ) : null}
      {scanner.error ? <p role="alert">{scanner.error.message}</p> : null}
    </section>
  );
};
```

Browser camera access requires HTTPS or localhost. `cameraPermission` observes permission without prompting; `start`, `getCameras`, and `switchCamera` can trigger the browser permission flow. A `granted` value does not guarantee that a camera is currently available.

`scanImage` does not request camera permission and stops any active live scan first. It uses a hidden temporary container by default. To retain a preview, pass both `showImage: true` and an existing `containerId`; call `stop` or `reset` to clear it. Large phone photos require a full-resolution decoding canvas, so applications should consider `maxFileSize` and client-side resizing.

Result metadata fields such as `format`, `bounds`, and `contentType` can be `null` when the selected decoder does not provide them. Torch and zoom availability belong to the active camera track and may change after switching cameras. For WeChat scanning, pass a `wechatAdapter`; the application remains responsible for JS-SDK loading, signature creation, and readiness.

## Progress

There are about **60** hooks in library, most of them are still experimental and not stable yet. In menu, only the hooks without prefix tag is
entirely stable. If a hook with prefix tag of **new**, it means it has passed tests; with a prefix tag of **cup** means experimental; a prefix tag of
**clock** means in plan.

- When a test for a hook or a feature of a hook passed, the z in version x.y.z should be increased by 1.
- When a hook pass all tests, it should be switched to **new**, and the y in version x.y.z should be increased by 1.
- When a module of hooks pass all tests, the x in version x.y.z should be increased by 1.
- After a module of hooks all pass tests for 3 decades, it should get retests, the hooks pass retests should be switched to **stable**.
- After a module of hooks all pass retests, and the x in version x.y.z should be increased by 1.
- Commonly, when a hook passes the first tests, the z should be increased by 1. If a hook is complex, it could increase with a feature passing tests.
- If a clock hook switch into **cup**, the y in version x.y.z should be increased by 1.
- If a new hook is created, the y in version x.y.z should be increased by 1.

## Report

- v2.0.0
  - Add useEyeDropper with native color picking, capability detection, cancellation, public types, and lifecycle safety
  - Complete automated coverage for every implemented Hook with 76 test files and 472 passing tests
  - Harden asynchronous effects, animation frames, lazy operations, promises, and unmount behavior
  - Correct browser listeners, observers, resource cleanup, state, storage, and callback handling across the Hook library
  - Add production documentation configuration and refresh generated package and documentation artifacts

- v1.4.0
  - Add useQrcodeScan with lazy HTML5 scanning and an injectable WeChat adapter
  - Add image decoding, structured result metadata, permission state, torch, zoom, concurrency guards, and tests

- v1.2.3
  - Add new hook useFavicon

- v1.2.2
  - Add new hook useTitle

- v1.2.1
  - Pass tests for useWatch
  - Pass tests for useWatchGetter
