"use client";

import { useState } from "react";

export default function Notifications() {
  // Example notification data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Welcome!",
      message: "Thank you for joining our platform. Enjoy your stay!",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Update Available",
      message: "A new version of the app is available. Please update.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 3,
      title: "Promotion",
      message: "50% off on all premium plans for the next 24 hours.",
      time: "2 days ago",
      read: false,
    },
  ]);

  // Mark a notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // Clear all notifications
  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white min-h-[calc(100vh-100px)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button
          onClick={clearAll}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No notifications at the moment.
        </p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={`
                p-4 rounded-lg shadow-sm
                ${notif.read ? "bg-gray-100 dark:bg-[#1f1f1f]" : "bg-blue-50 dark:bg-[#212c35]"}
              `}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-base">{notif.title}</h3>
                {!notif.read && (
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="text-xs text-blue-600 dark:text-blue-400 underline"
                  >
                    Mark as read
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {notif.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {notif.time}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
