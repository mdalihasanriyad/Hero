import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = "text-blue-600 font-semibold border-b-2 border-blue-600";
  const normalClass = "hover:text-blue-600";

  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <img src={logo} alt="logo" className='w-10' />
        </div>
        <span className="font-bold text-xl tracking-tight text-blue-900 uppercase">
          Hero.io
        </span>
      </Link>

      <div className="hidden md:flex gap-8 text-gray-600 font-medium items-center absolute left-1/2 transform -translate-x-1/2">

        <NavLink
          to="/"
          className={({ isActive }) => isActive ? activeClass : normalClass}
        >


          Home
        </NavLink>

        <NavLink
          to="/apps"
          className={({ isActive }) => isActive ? activeClass : normalClass}
        >
          Apps
        </NavLink>

        <NavLink
          to="/installation"
          className={({ isActive }) => isActive ? activeClass : normalClass}
        >
          Installation
        </NavLink>

      </div>

      <div className="hidden md:block">
        <a
          href="https://github.com/mdalihasanriyad"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Contribute
          </button>
        </a>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen
              ? "M6 18L18 6M6 6l12 12"
              : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b p-5 flex flex-col gap-4 md:hidden shadow-lg">

          <NavLink to="/" onClick={()=>setIsOpen(false)}>Home</NavLink>
          <NavLink to="/apps" onClick={()=>setIsOpen(false)}>Apps</NavLink>
          <NavLink to="/installation" onClick={()=>setIsOpen(false)}>Installation</NavLink>

          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-blue-600 text-white py-2 rounded-lg w-full">
              Contribute
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;