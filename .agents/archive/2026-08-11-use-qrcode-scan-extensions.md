# Completed task: extend useQrcodeScan capabilities

## Result

- Added image file decoding with hidden temporary containers, optional retained previews, file type/size validation, and camera mutual exclusion.
- Added normalized scan metadata for camera, image, and WeChat sources while preserving the original string result API.
- Added camera capability state plus torch, zoom, and capability refresh actions.
- Added observable camera permission state and PermissionStatus change cleanup without prompting on mount.
- Added independent lifecycle, control, permission, and switch generations to prevent stale async work from overwriting current state.
- Added one owned child container per scanner so delayed cleanup cannot erase a newer scanner in the same host.
- Kept all package manifests and the lockfile at version 1.4.0 because this release remains unpublished.

## Verification

- `npx tsc -p src/hooks/tsconfig.json --noEmit` passed.
- 20 test files and 312 tests passed; useQrcodeScan has 40 focused tests.
- `npm run package` and `npm run build` passed.
- `npm pack ./dist --dry-run --json` reported 94 entries, both QR declaration files, and no raw TypeScript source.
- Both generated bundles retain lazy `import('html5-qrcode')`.
- All modified text files passed UTF-8 without BOM and whitespace checks.

## Known follow-ups

- Run camera, torch, zoom, image, and WeChat tests on physical iOS and Android devices.
- Consider image pixel-dimension pre-scaling if large mobile photos cause memory pressure.
- Re-evaluate the html5-qrcode file path when upgrading because 2.3.8 has an internal object URL lifecycle limitation.
- Correct the existing ESM/CJS manifest mismatch separately.
