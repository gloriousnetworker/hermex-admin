"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Track if the menu is open or closed
  const [darkMode, setDarkMode] = useState(false); // Track dark mode state

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode and store preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Set dark mode on page load based on localStorage or default to light mode
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
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={40} />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
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
          <Link href="/login" className="px-4 py-2 bg-green-500 rounded">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 bg-gray-500 rounded">
            Register
          </Link>
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            {darkMode ? (
              <>
                <span>Dark Mode</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m7-7h1M3 12H2m15.364-6.364l-.707.707M5.636 18.364l-.707-.707M18.364 18.364l.707-.707M5.636 5.636l-.707.707"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Light Mode</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m7-7h1M3 12H2m15.364-6.364l-.707.707M5.636 18.364l-.707-.707M18.364 18.364l.707-.707M5.636 5.636l-.707.707"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-500 text-white mt-4 dark:bg-gray-900`}
      >
        <Link
          href="#section1"
          className="block py-2 px-4 hover:bg-blue-600"
          onClick={toggleMenu}
        >
          Section 1
        </Link>
        <Link
          href="#section2"
          className="block py-2 px-4 hover:bg-blue-600"
          onClick={toggleMenu}
        >
          Section 2
        </Link>
        {/* ...other menu items */}
      </div>
    </nav>
  );
}
