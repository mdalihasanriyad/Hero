import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <div className="text-white font-bold text-xl italic">H</div>
        </div>
        <span className="font-bold text-xl tracking-tight text-blue-900 uppercase">Hero.io</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-gray-600 font-medium items-center">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Apps</a>
        <a href="#" className="hover:text-blue-600">Installation</a>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
          <span className="text-sm">Contribute</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b p-5 flex flex-col gap-4 md:hidden shadow-lg">
          <a href="#" className="font-medium">Home</a>
          <a href="#" className="font-medium">Apps</a>
          <a href="#" className="font-medium">Installation</a>
          <button className="bg-blue-600 text-white py-2 rounded-lg">Contribute</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;