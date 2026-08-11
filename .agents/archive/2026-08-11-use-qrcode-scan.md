# Completed task: migrate useQrcodeScan

## Result

- Added a public `useQrcodeScan` Hook with lifecycle state and stable actions.
- Added a per-instance `QrcodeScanService` with lazy HTML5 scanning.
- Added an injectable, abort-aware WeChat adapter contract.
- Implemented pause, resume, camera enumeration, and real camera switching.
- Guarded SSR access, stale callbacks, overlapping operations, and unmount cleanup.
- Added public type exports, standard JSDoc, README guidance, changelog, version 1.4.0, and generated artifacts.

## Verification

- Library TypeScript check passed.
- 20 test files and 285 tests passed.
- Vite documentation build passed.
- Library package build and npm pack dry run passed.
- Generated CJS and ESM bundles preserve lazy `import("html5-qrcode")`.
- UTF-8 BOM and diff whitespace checks passed.

## Known follow-ups

- Real-device validation is still required for iOS Safari, Android Chrome, and both WeChat clients.
- The existing package manifest mixes `type: module` with a CommonJS `.js` main entry and should be corrected separately.
- Existing `useTicker` tests still emit five unrelated React `act(...)` warnings.
