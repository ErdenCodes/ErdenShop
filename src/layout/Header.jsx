import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ShopFor</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/products" className="flex items-center">
            <ShoppingCart className="mr-2" /> Products
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;