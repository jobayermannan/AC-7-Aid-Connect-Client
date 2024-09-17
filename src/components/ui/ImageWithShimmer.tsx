// src/components/ui/ImageWithShimmer.tsx
import React, { useState } from 'react';
import Shimmer from './Shimmer'; // Adjust the import path as needed

interface ImageWithShimmerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithShimmer: React.FC<ImageWithShimmerProps> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <Shimmer />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageWithShimmer;