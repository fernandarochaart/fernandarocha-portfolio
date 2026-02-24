import Image from "next/image";
import type { JobImageProps } from "@/types/image";

export default function JobImage({
  src,
  alt,
  priority = false,
}: JobImageProps) {
  return (
    <div className="relative w-full aspect-4/3 overflow-hidden rounded-sm bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
