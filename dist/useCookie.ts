import { useState, useEffect } from 'react';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') {
    return null;
  }
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') {
    return;
  }
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function useCookie(name: string, initialValue: string, days: number): [string, (value: string) => void] {
  const [value, setValue] = useState(() => getCookie(name) || initialValue);

  useEffect(() => {
    setCookie(name, value, days);
  }, [name, value, days]);

  return [value, setValue];
}

export default useCookie;