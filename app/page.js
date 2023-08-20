"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <>
      <div className="relative bg-blue-500">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="main.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
        </div>
        <nav className="hidden md:flex flex-grow justify-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Team
          </a>
        </nav>
          
          <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>
      <nav
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 right-0 bg-blue-500 md:hidden transition-all duration-300`}
      >
        <div className="p-4 space-y-2">
          <a href="#" className="block text-white">
            Home
          </a>
          <a href="#" className="block text-white">
            About
          </a>
          <a href="#" className="block text-white">
            Team
          </a>
        </div>
      </nav>
    </div>
    </>
  );
}
