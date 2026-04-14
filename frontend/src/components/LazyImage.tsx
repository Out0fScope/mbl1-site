'use client';

import NextImage, { StaticImageData } from 'next/image';
import { useState } from 'react';

const LazyImage = ({ src, alt }: { src: string | StaticImageData; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full rounded-sm overflow-hidden shadow-xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="image-loader"></span>
        </div>
      )}

      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default LazyImage;
