import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Clean icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">XivTech Assignment </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#markets" className="text-gray-600 hover:text-blue-600 transition">Markets</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#markets" className="block text-gray-700 hover:text-blue-600">Markets</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
