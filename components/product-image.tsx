"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  productName?: string;
}

function Placeholder({ productName }: { productName?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="bg-gray-200 rounded-lg p-4">
          <ImageIcon className="w-12 h-12 text-gray-400" strokeWidth={1.5} />
        </div>
        <p className="text-gray-500 text-sm font-medium">Product Image</p>
        {productName && (
          <p className="text-gray-400 text-xs text-center max-w-[150px] line-clamp-2">
            {productName}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProductImage({
  src,
  alt,
  width = 500,
  height = 500,
  fill = false,
  priority = false,
  className = "",
  productName,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // If no src or error occurred, show placeholder
  if (!src || hasError) {
    return <Placeholder productName={productName} />;
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={className}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={className}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </>
  );
}

