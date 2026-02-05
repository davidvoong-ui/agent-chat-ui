import { authToken } from "@/features/auth/authToken";

// src/lib/api/fetcher.ts
const COMPLIANCE_LIVE_API_BASE_URL = (
  process.env.NEXT_PUBLIC_COMPLIANCE_LIVE_API_BASE_URL ?? ""
).replace(/\/$/, "");

function normalizePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${COMPLIANCE_LIVE_API_BASE_URL}${normalizePath(path)}`;

  const headers = new Headers(options.headers);

  // JSON body handling
  if (options.body && typeof options.body === "string") {
    headers.set("Content-Type", "application/json");
  }

  // Auth header injection
  if (authToken.isSet()) {
    headers.set("Authorization", `Bearer ${authToken.get()}`);
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }

  if (res.status === 204) {
    return null as T;
  }

  return res.json();
}
