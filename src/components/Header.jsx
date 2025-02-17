import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
