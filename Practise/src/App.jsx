import React, { useState } from 'react';
import './App.css'
// import logo2 from './assets/logo';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white logo text-lg font-bold">
          <a href="/">
          {/* <img width={100} height={50} src='https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/338188262_897753991480357_7471218377957244865_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UNmvdqcLwjgQ7kNvgFz64hz&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYAP_W-V6lKiWLVISe5PfLMNLpiXvc5k1ZOvVaEj5L1wsg&oe=66F22702' alt="" /> */}
          </a>
        </div>

        {/* Hamburger Button (for small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links (hidden on small screens) */}
         <div className={`md:flex space-x-4 hidden md:block`}> {/*${isOpen ? 'block' : 'hidden'}} */}
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/services" className="text-gray-300 hover:text-white">Services</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block text-gray-300 hover:text-white p-2">Home</a>
          <a href="/about" className="block text-gray-300 hover:text-white p-2">About</a>
          <a href="/services" className="block text-gray-300 hover:text-white p-2">Services</a>
          <a href="/contact" className="block text-gray-300 hover:text-white p-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

