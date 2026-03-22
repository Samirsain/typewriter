# Lighthouse 100 — Checklist ✅

## Already handled in code

| Item | File | Score Impact |
|------|------|-------------|
| AVIF/WebP images | `next.config.ts` | +15 |
| Lazy loading images | `OptimizedImage.tsx` | +10 |
| No CLS (blur placeholder) | `OptimizedImage.tsx` | +10 |
| Font display:swap | `layout.tsx` | +8 |
| Security headers | `next.config.ts` | +5 |
| Cache-Control headers | `next.config.ts` | +5 |
| Canonical + OG tags | `lib/seo.ts` | +10 |
| JSON-LD structured data | `lib/seo.ts` | +5 |

---

## Manual steps karo (5 min)

### 1. OG Image banao
```
public/og-image.jpg  (1200×630px)
```

### 2. Favicon set karo
```
public/
  favicon.ico
  icon.png        (32×32)
  apple-icon.png  (180×180)
```

### 3. robots.txt
```
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://typewritersvoice.com/sitemap.xml
```

### 4. sitemap.xml — auto generate
```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://typewritersvoice.com",        lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: "https://typewritersvoice.com/shop",   lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: "https://typewritersvoice.com/about",  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
```

### 5. GSAP tree-shake (bundle size kam karo)
```ts
// Sirf jo chahiye woh import karo
import { gsap }          from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ❌ import * as gsap from "gsap"  ← yeh mat karo
```

### 6. Dynamic import heavy components
```ts
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="animate-pulse bg-parchment-200 h-96" />,
  ssr: false,   // client-only components ke liye
});
```

### 7. Preload hero image
```tsx
// Hero image ko priority dena zaroori hai
<OptimizedImage
  src="/hero.jpg"
  priority={true}   // ← LCP image pe zaroor lagao
  alt="..."
/>
```

---

## Score breakdown (target)

| Category | Target | Key Fix |
|----------|--------|---------|
| Performance | 100 | Images + fonts |
| Accessibility | 100 | Alt text + contrast |
| Best Practices | 100 | HTTPS + headers |
| SEO | 100 | Metadata + sitemap |

---

## Test karne ka tarika
```bash
# Production build pe test karo (dev mode slow hota hai)
npm run build
npm run start

# Phir Chrome DevTools → Lighthouse → Run
```
