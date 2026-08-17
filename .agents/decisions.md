# Architecture decisions

## 2026-08-11: Keep WeChat SDK setup outside the Hook library

The library exposes `QrcodeScanWechatAdapter` instead of embedding a business app ID, signature endpoint, or SDK bootstrap logic. This keeps the public package reusable and lets applications own WeChat security configuration.

## 2026-08-17: Skip unimplemented hooks without inventing behavior

`useEyeDropper` exports an empty function and has no usable API contract, so it remains unchecked in `test.todo.md` until an implementation exists. Tests were added only for hooks with observable implemented behavior.

## 2026-08-17: Treat browser resources as hook-owned

The tested fixes keep listeners, timers, observer subscriptions, toast roots, and temporary DOM nodes scoped to the hook instance and clean them up on lifecycle exit. This avoids cross-instance callbacks and stale asynchronous updates.

## 2026-08-11: Create one scanner service per Hook

`useQrcodeScan` lazily creates its own `QrcodeScanService`. Only the `html5-qrcode` module promise is shared. This prevents one component from stopping or overwriting another component's scanner.

## 2026-08-11: Install but externalize html5-qrcode

`html5-qrcode@2.3.8` is a direct dependency so the Hook works after normal package installation. Rollup keeps it external and the service uses dynamic import, preserving on-demand loading and avoiding an entry-bundle size increase.

## 2026-08-11: Use the official Rollup TypeScript plugin

The package build now uses `@rollup/plugin-typescript` with emit enabled only in Rollup. The source `tsconfig` remains `noEmit` for type checking, while public type-only exports and declaration files build correctly.

## 2026-08-11: Preserve text results while adding structured scan metadata

`result: string | null` remains the compatibility API. `scanResult` adds normalized source, format, bounds, content type, decoder, and timestamp data. Success callbacks accept an optional second details argument so existing one-argument callbacks and custom services remain valid.

## 2026-08-11: Give every scanner an owned child container

The caller-provided `containerId` is treated as a host. Each camera or image scanner receives a unique owned child container. This prevents a superseded scanner's delayed `clear()` from deleting a newer scanner that reused the same host.

## 2026-08-11: Keep permission and device controls outside scan lifecycle generations

Permission queries and torch/zoom controls use independent operation sequences. They cannot invalidate live decode callbacks. Permissions API results are observed without prompting on mount, while successful or denied camera operations trigger a guarded permission refresh.
