import React from 'react';

const ProductCard = () => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">Product Name</h2>
      <p className="text-gray-700 mb-4">$99.99</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;