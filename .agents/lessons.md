# Lessons

## 2026-08-11: QR scanner migration

- Browser scanner libraries should be loaded on first use, not at the library entry point.
- A scanner singleton makes component unmount and concurrent scanning interfere; scanner ownership should follow Hook ownership.
- An operation generation plus `AbortSignal` is needed because dynamic imports and WeChat SDK calls cannot always be physically cancelled.
- `html5-qrcode` treats per-frame decode misses as normal scanner feedback, so they must not be stored as operational errors.
- The previous TypeScript Rollup plugin could not parse public `export type` declarations; the official Rollup TypeScript plugin supports the required declaration build.

## 2026-08-11: QR scanner capability extensions

- `Html5Qrcode.clear()` clears its whole target element, so sharing the caller's element directly creates a delayed-cleanup race; use one owned child element per scanner.
- A scanner awaiting `start()` or `scanFileV2()` cannot be safely cleared immediately. Mark it pending, hide its owned container on stop, and perform final cleanup after the pending promise settles.
- Camera switching needs a service-level generation check before and after camera enumeration; Hook-level stale-state guards alone cannot prevent a stopped camera from reopening.
- Torch arrays represent allowed values. `[true]` is not a bidirectional control; only arrays containing both `true` and `false` should expose a toggle.
- `BarcodeDetector in window` is insufficient capability detection because construction can throw. Probe construction and fall back to ZXing.
- `scanFileV2()` creates full-resolution canvases for large phone photos, and html5-qrcode 2.3.8 has an internal object URL lifecycle limitation. Expose an optional byte limit and document client-side resizing; a dependency upgrade or replacement is required for a complete upstream fix.
