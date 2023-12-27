import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed top-0  left-0 z-50 w-full">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-green-600">
          <a href="logo" className="text-lg font-bold">
            Logo
          </a>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-800 hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-black">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-black">
            Contact
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-black">
            Services
          </Link>
          <a href="#your-plants" className="text-gray-800 hover:text-black">
            Your Plants
          </a>
        </div>
      </div>
    </nav>
  );
};
