"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LogoutModal from "../../components/modals/LogoutModal";

export default function Sidebar({
  isOpen,
  onCloseSidebar,
  onNavigate,
  onLogout,
  activeSection,
}) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Menu items
  const menuItems = [
    { label: "Overview", section: "overview" },
    { label: "Sales Trend", section: "sales-trends" },
    { label: "User Growth", section: "user-growth" },
    { label: "Category Distribution", section: "category-distribution" },
    { label: "Table Data", section: "data-table" },
    { label: "Settings", section: "settings" },
  ];

  // Detect if the <html> element has the 'dark' class to set isDarkMode
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDarkMode = () => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
      };
      checkDarkMode();
      // If you want dynamic detection (if user toggles dark mode from elsewhere),
      // you could add a MutationObserver or an event listener, but for now this
      // single check on mount should suffice.
    }
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <aside
      // On mobile: fixed + slide in/out. On md+: static with full width visible.
      className={`
        fixed
        md:static
        top-0
        left-0
        h-full
        z-50
        transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        w-72
        p-6
        text-gray-200
        rounded-tr-3xl
        rounded-br-3xl
        shadow-lg
        overflow-y-auto
        transition-transform
        duration-300
        // Gradient background to mimic the screenshot
        bg-gradient-to-b
        from-[#2c3539]   // a dark teal/gray
        to-[#1f2426]     // a slightly darker shade
        dark:from-[#2c3539]
        dark:to-[#1f2426]
      `}
      style={{}}
    >
      {/* Close (X) Button for Mobile */}
      <button
        onClick={onCloseSidebar}
        className="
          md:hidden
          absolute
          top-4
          right-4
          text-gray-200
          hover:text-gray-300
        "
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
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Top Section: Logo */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          {/* A single logo image with filter for dark mode */}
          <Image
            src="/logo.png" // Replace with your actual single logo
            alt="Company Logo"
            width={120}
            height={50}
            className={`transition-all ${
              isDarkMode ? "filter invert" : ""
            }`} 
          />
        </div>

        {/* Navigation + Logout (red text) */}
        <nav>
          <ul className="flex flex-col space-y-1 items-center text-center">
            {/* Menu Items */}
            {menuItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <li key={item.section} className="w-full">
                  <button
                    onClick={() => {
                      onNavigate(item.section);
                      onCloseSidebar(); // auto-close sidebar on mobile
                    }}
                    className={`
                      w-full
                      px-4
                      py-3
                      rounded-lg
                      font-medium
                      ${
                        isActive
                          ? "bg-white bg-opacity-10"
                          : "hover:bg-white hover:bg-opacity-5"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}

            {/* Logout as Red Text */}
            <li className="w-full">
              <button
                onClick={handleLogoutClick}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  font-medium
                  text-red-500
                  hover:bg-white hover:bg-opacity-5
                "
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section: Profile */}
      <div className="mt-auto flex flex-col items-center">
        <div className="flex items-center p-3 rounded-lg bg-white bg-opacity-10">
          {/* Profile image placeholder */}
          <Image
            src="/dashboard_images/profile-icon.png"
            alt="Profile Icon"
            width={40}
            height={40}
            className="rounded-full object-cover mr-3"
          />
          <div>
            <p className="font-semibold text-white">Ivar Born</p>
            <p className="text-sm text-green-400">Active</p>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal
          isOpen={showLogoutModal}
          onConfirm={confirmLogout}
          onCancel={cancelLogout}
        />
      )}
    </aside>
  );
}
