# Handoff

`useQrcodeScan` 1.4.0 now includes camera and image scanning, normalized result metadata, observable camera permission, torch, zoom, capability refresh, and guarded scanner/container lifecycles. The source implementation lives in `src/hooks/useQrcodeScan.ts`, with its scanner service in `src/hooks/utils/qrcodeScanService.ts`.

Public exports, Hook-standard JSDoc, README, changelog, tests, generated `dist` declarations/bundles, and `docs` artifacts are synchronized without changing the already-unreleased 1.4.0 version.

Verification passed: library TypeScript check, 20 test files / 312 tests (including 40 QR scanner tests), Vite documentation build, Rollup package build, npm pack dry run, lazy html5-qrcode import audit, diff whitespace, and UTF-8 without BOM.

Before release, perform real-device tests on iOS Safari, Android Chrome, and WeChat clients. Large image pixel dimensions can still cause memory pressure inside html5-qrcode 2.3.8, and its internal file object URL lifecycle cannot be fully corrected from this wrapper. Existing unrelated follow-ups remain: the package mixes `type: module` with a CommonJS `.js` main entry, documentation chunks exceed 500 kB, and five useTicker tests emit act warnings. No Git commit or package publication was performed.
