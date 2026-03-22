import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://typewritersvoice.com",       lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: "https://typewritersvoice.com/shop",  lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: "https://typewritersvoice.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
