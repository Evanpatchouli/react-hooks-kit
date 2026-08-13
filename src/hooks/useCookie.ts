import { useState, useEffect } from "react";

function decodeCookieValue(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const encodedName = encodeURIComponent(name);
  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${encodedName}=`));

  if (!cookie) return null;

  return decodeCookieValue(cookie.slice(encodedName.length + 1));
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') {
    return;
  }
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/`;
}

export function useCookie(name: string, initialValue: string, days: number): [string, (value: string) => void] {
  const [value, setValue] = useState(() => getCookie(name) || initialValue);

  useEffect(() => {
    setCookie(name, value, days);
  }, [name, value, days]);

  return [value, setValue];
}

export default useCookie;
