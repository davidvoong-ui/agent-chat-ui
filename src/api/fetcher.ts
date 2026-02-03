// apiFetcher.ts
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetcherOptions<Body = any> {
  method?: HTTPMethod;
  body?: Body;
  headers?: Record<string, string>;
  query?: Record<string, string | number | boolean>;
}

/**
 * Simple lightweight fetcher for APIs with OpenAPI typing support
 */
export async function apiFetcher<ResponseType = any, BodyType = any>(
  url: string,
  options: FetcherOptions<BodyType> = {},
): Promise<ResponseType> {
  const { method = "GET", body, headers = {}, query } = options;

  // Build query string if needed
  let queryString = "";
  if (query) {
    const params = new URLSearchParams();
    for (const key in query) {
      params.append(key, String(query[key]));
    }
    queryString = `?${params.toString()}`;
  }

  const response = await fetch(`${url}${queryString}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`);
  }

  return (await response.json()) as ResponseType;
}
