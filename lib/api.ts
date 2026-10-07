/**
 * Central API fetch utility for Next.js ISR pages.
 * All data fetching goes through this file — replaces static data/ imports.
 *
 * Revalidation: 0 / no-store in development so CMS edits reflect immediately.
 * In production: 60s default ISR.
 */

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const DEFAULT_REVALIDATE = process.env.NODE_ENV === "development" ? 0 : 60;

async function apiFetch<T>(
  endpoint: string,
  revalidate: number = DEFAULT_REVALIDATE
): Promise<T> {
  const isDev = process.env.NODE_ENV === "development";
  const fetchOptions: RequestInit =
    isDev || revalidate === 0
      ? { cache: "no-store" }
      : { next: { revalidate, tags: [endpoint.split("/")[1]] } };

  const res = await fetch(`${API_URL}/api${endpoint}`, fetchOptions);

  if (!res.ok) {
    throw new Error(
      `API fetch failed: ${endpoint} → ${res.status} ${res.statusText}`
    );
  }

  const json = await res.json();
  return json.data as T;
}

// ── Typed API calls ──────────────────────────────────────────────────────────

export async function getServices() {
  return apiFetch<any[]>("/services");
}

export async function getServiceBySlug(slug: string) {
  return apiFetch<any>(`/services/${slug}`);
}

export async function getTestimonials() {
  return apiFetch<any[]>("/testimonials", 1800); // 30 min
}

export async function getHealthGuideArticles() {
  return apiFetch<any[]>("/health-guide");
}

export async function getHealthGuideBySlug(slug: string) {
  return apiFetch<any>(`/health-guide/${slug}`);
}

export async function getLocationPages() {
  return apiFetch<any[]>("/locations");
}

export async function getLocationBySlug(slug: string) {
  return apiFetch<any>(`/locations/${slug}`);
}

export async function getSiteSettings() {
  return apiFetch<any>("/settings", 86400); // 24 hours
}
