import type { MetadataRoute } from "next";

const routes = ["", "/services", "/specialists", "/about", "/contacts", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://example.com${route}`,
    lastModified: new Date("2026-08-14")
  }));
}
