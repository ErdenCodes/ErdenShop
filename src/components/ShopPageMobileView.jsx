import React from 'react';
import { Link } from 'react-router-dom';

const ShopPageMobileView = () => {
  return (
    <div>
      <h1>Shop Page Mobile View</h1>
      <div className="product-card">
        <h2>Product 1</h2>
        <Link to="/product-detail-mobile">View Details</Link>
      </div>
      <div className="product-card">
        <h2>Product 2</h2>
        <Link to="/product-detail-mobile">View Details</Link>
      </div>
      {/* Add more product cards as needed */}
    </div>
  );
};

export default ShopPageMobileView;
