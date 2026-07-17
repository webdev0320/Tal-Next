"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      {!loaded && (
        <div
          className="absolute inset-0 img-skeleton"
          style={{ borderRadius: 'inherit' }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={`${loaded ? 'img-loaded' : 'opacity-0'} w-full h-auto`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
