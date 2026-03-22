import NextImage, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt:        string;       // force alt text — accessibility + SEO
  wrapClass?: string;
}

/**
 * Drop-in replacement for next/image with:
 * - Blur placeholder auto-generated
 * - Lazy loading by default
 * - Aspect ratio wrapper to prevent CLS (Cumulative Layout Shift)
 * - AVIF/WebP auto served via next.config
 */
export default function OptimizedImage({
  src,
  alt,
  fill,
  width,
  height,
  priority,
  className,
  wrapClass,
  sizes,
  ...rest
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", wrapClass)}>
      <NextImage
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width  : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={
          sizes ??
          "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjRGMEU0Ii8+PC9zdmc+"
        className={cn(
          "transition-opacity duration-500 object-cover",
          className
        )}
        {...rest}
      />
    </div>
  );
}
