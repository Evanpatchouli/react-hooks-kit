// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// 为了兼容从 CRA 迁移过来的测试，将 vi 映射到全局 jest 对象
(globalThis as any).jest = vi;

