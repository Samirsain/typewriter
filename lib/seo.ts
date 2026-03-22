import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://typewritersvoice.com";

interface SEOProps {
  title?:       string;
  description?: string;
  image?:       string;
  path?:        string;
  noIndex?:     boolean;
}

/**
 * generateSEO — use in every page.tsx
 *
 * export const metadata = generateSEO({
 *   title: "About Us",
 *   description: "...",
 * });
 */
export function generateSEO({
  title       = "Typewriters Voice — Original Art Prints",
  description = "Handcrafted art prints exploring Solitude, Resilience, Connection & more. Shopify store opening soon.",
  image       = "/og-image.jpg",
  path        = "/",
  noIndex     = false,
}: SEOProps = {}): Metadata {
  const url      = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default:  title,
      template: "%s | Typewriters Voice",
    },
    description,
    keywords: [
      "art prints", "original paintings", "poetic art",
      "solitude art", "wall art", "buy art prints online",
      "typewriters voice", "handcrafted prints",
    ],
    authors:  [{ name: "Typewriters Voice" }],
    creator:  "Typewriters Voice",
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true,  follow: true,
          googleBot: { index: true, follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1 } },

    openGraph: {
      type:        "website",
      url,
      title,
      description,
      siteName:    "Typewriters Voice",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale:      "en_US",
    },

    twitter: {
      card:        "summary_large_image",
      title,
      description,
      images:      [imageUrl],
      creator:     "@typewritersvoice",
    },

    alternates: { canonical: url },

    other: {
      "application/ld+json": JSON.stringify({
        "@context":   "https://schema.org",
        "@type":      "Store",
        name:         "Typewriters Voice",
        url:          BASE_URL,
        description,
        potentialAction: {
          "@type":    "SearchAction",
          target:     `${BASE_URL}/shop?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
    },
  };
}
