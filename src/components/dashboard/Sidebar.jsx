"use client";

import { useState } from 'react';
import Image from 'next/image';
import LogoutModal from '../../components/modals/LogoutModal';

export default function Sidebar({ onNavigate, onLogout }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const menuItems = [
    { label: "Overview", section: "overview" },
    { label: "Sales Trends", section: "sales-trends" },
    { label: "User Growth", section: "user-growth" },
    { label: "Category Distribution", section: "category-distribution" },
    { label: "Data Table", section: "data-table" },
    { label: "Settings", section: "settings" },
  ];

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
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 flex flex-col justify-between h-screen relative">
      <div>
        {/* Logo at top */}
        <div className="flex justify-center mb-8">
          <Image src="/placeholder.png" alt="Logo" width={120} height={120} />
        </div>
        {/* Navigation links */}
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.section}>
                <button 
                  onClick={() => onNavigate(item.section)}
                  className="w-full text-left p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-800 dark:text-gray-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Logout button at bottom */}
      <div>
        <button 
          onClick={handleLogoutClick}
          className="w-full text-left p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
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
