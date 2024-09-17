// src/components/ui/Spinner.tsx
import React from 'react';
import './Shimmer.css'; // Ensure this path is correct

const Spinner: React.FC = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;