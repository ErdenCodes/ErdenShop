import React from 'react';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;