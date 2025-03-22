"use client";

import { useState, useEffect } from "react";

export default function Navbar({ toggleSidebar, activeSection, onNavigate }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Load saved mode
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Save mode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Transform activeSection (e.g., "sales-trends") into a title: "Sales Trends"
  const sectionTitle = activeSection
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    // Minimal/transparent style, no card background
    <nav
      className="
        w-full
        p-4
        flex
        items-center
        justify-between
        bg-transparent
        text-gray-800
        dark:text-gray-200
      "
    >
      <div className="flex items-center">
        {/* Hamburger for mobile view */}
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-800 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
        <span className="text-xl font-bold">{sectionTitle}</span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button onClick={() => onNavigate("notifications")} className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800 dark:text-gray-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a6 6 0 00-6 6v4H4a1 1 0 000 2h16a1 1 0 000-2h-2V8a6 6 0 00-6-6zM5 18a7 7 0 0114 0H5z" />
          </svg>
        </button>
        {/* Toggle Dark/Light Mode */}
        <button
          onClick={toggleDarkMode}
          className="
            px-2
            py-1
            rounded
            bg-gray-300
            dark:bg-gray-600
            text-gray-800
            dark:text-gray-200
            transition
          "
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
