"use client";

import { useState, useEffect } from 'react';

export default function Navbar({ toggleSidebar, activeSection, onNavigate, userName }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-500 text-white p-4 flex items-center justify-between dark:bg-gray-900">
      <div className="flex items-center">
        <button 
          className="md:hidden mr-4"
          onClick={toggleSidebar}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
        <span className="text-xl font-bold ml-2">
          {activeSection.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-lg">Welcome, {userName ? userName : "John Doe"}</span>
        <button onClick={() => onNavigate('notifications')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <path d="M12 2a6 6 0 00-6 6v4H4a1 1 0 000 2h16a1 1 0 000-2h-2V8a6 6 0 00-6-6zM5 18a7 7 0 0114 0H5z" />
          </svg>
        </button>
        <button onClick={() => onNavigate('profile')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <path d="M12 2a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5zm0 14c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z" />
          </svg>
        </button>
        <button 
          onClick={toggleDarkMode} 
          className="px-2 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
