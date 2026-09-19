// src/components/ui/ImageWithShimmer.tsx
import React, { useState } from 'react';
import Shimmer from './Shimmer';

interface ImageWithShimmerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithShimmer: React.FC<ImageWithShimmerProps> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      {loading && !error && (
        <div className="absolute inset-0 flex justify-center items-center">
          <Shimmer />
        </div>
      )}
      <img
        src={error ? '/placeholder.png' : src}
        alt={alt}
        className={`${className} ${loading && !error ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default ImageWithShimmer;