import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-full w-3/4 max-w-6xl px-6 md:px-16 py-4 flex items-center justify-between">
      
      {/* Logo + Brand Text */}
      <a href='/'>
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
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <a href="/#about" className="text-lg text-gray-700 hover:text-primary-700 font-medium">
          About
        </a>
        <a href="/#contact" className="text-lg text-gray-700 hover:text-primary-700 font-medium">
          Contact
        </a>
        <a href="/guidelines" className="text-lg text-gray-700 hover:text-primary-700 font-medium">
          Guidelines
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 right-6 w-48 bg-white shadow-lg rounded-xl flex flex-col py-4 space-y-4 md:hidden">
          <a href="/#about" className="text-lg text-gray-700 hover:text-primary-700 font-medium text-center">
            About
          </a>
          <a href="/#contact" className="text-lg text-gray-700 hover:text-primary-700 font-medium text-center">
            Contact
          </a>
          <a href="/guidelines" className="text-lg text-gray-700 hover:text-primary-700 font-medium text-center">
            Guidelines
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
