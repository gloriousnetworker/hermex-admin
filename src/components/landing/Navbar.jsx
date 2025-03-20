"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state
  const [darkMode, setDarkMode] = useState(false); // Track dark mode state

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode and store preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Set dark mode on page load based on localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update localStorage when darkMode state changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-500 text-white p-4 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left: Active section title (for desktop, you can adjust as needed) */}
        <div className="flex items-center">
          <span className="text-xl font-bold">Dashboard</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="#section1" className="text-white hover:text-gray-300">
            Section 1
          </Link>
          <Link href="#section2" className="text-white hover:text-gray-300">
            Section 2
          </Link>
          <Link href="#section3" className="text-white hover:text-gray-300">
            Section 3
          </Link>
          <Link href="#section4" className="text-white hover:text-gray-300">
            Section 4
          </Link>
          <Link href="#section5" className="text-white hover:text-gray-300">
            Section 5
          </Link>
          <Link href="#section6" className="text-white hover:text-gray-300">
            Section 6
          </Link>
          <Link href="#section7" className="text-white hover:text-gray-300">
            Section 7
          </Link>
          <Link href="/signin/login" className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
            Login
          </Link>
          <Link href="/signin/register" className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600">
            Register
          </Link>
          {/* Dark Mode Toggle for Desktop */}
          <button
            onClick={toggleDarkMode}
            className="px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-blue-500 text-white mt-4 dark:bg-gray-900`}>
        <Link href="#section1" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Section 1
        </Link>
        <Link href="#section2" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Section 2
        </Link>
        <Link href="#section3" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Section 3
        </Link>
        <Link href="#section4" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Section 4
        </Link>
        <Link href="#section5" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Section 5
        </Link>
        <Link href="#section6" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Section 6
        </Link>
        <Link href="#section7" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Section 7
        </Link>
        <div className="border-t border-blue-600 my-2"></div>
        <Link href="/signin/login" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Login
        </Link>
        <Link href="/signin/register" onClick={toggleMenu} className="block py-2 px-4 hover:bg-blue-600">
          Register
        </Link>
        <button
          onClick={() => {
            toggleDarkMode();
            toggleMenu();
          }}
          className="w-full text-left py-2 px-4 hover:bg-blue-600"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
