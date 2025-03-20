// components/auth/register/Navbar.jsx

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

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

        {/* Dark Mode Toggle */}
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
    </nav>
  );
}
