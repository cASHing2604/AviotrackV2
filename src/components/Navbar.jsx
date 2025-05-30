import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-full w-3/4 max-w-6xl px-16 py-4 flex items-center justify-between">
      {/* Logo + Brand Text */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.jpeg"
          alt="AvioTrack Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
        <span className="text-2xl font-bold text-gray-800">
          AvioTrack
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <a href="/#about" className="text-lg text-gray-700 hover:text-primary-700 font-medium">
          About
        </a>
        <a href="/#contact" className="text-lg text-gray-700 hover:text-primary-700 font-medium">
          Contact Us
        </a>
        <a href="/guidelines" className="text-lg text-gray-700 hover:text-primary-700 font-medium">
          Guidelines
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
