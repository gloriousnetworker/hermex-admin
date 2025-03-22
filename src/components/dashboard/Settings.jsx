"use client";

import { useState } from "react";

export default function Settings() {
  // Example state for toggles or input fields
  const [profile, setProfile] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 555 123 4567",
  });
  const [darkModeToggle, setDarkModeToggle] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    // Submit or save logic here
    console.log("Profile saved:", profile);
  };

  return (
    <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#2b2b2b] text-gray-800 dark:text-white min-h-[calc(100vh-100px)]">
      <h2 className="text-xl font-bold mb-6">Settings</h2>

      {/* Profile Settings */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Profile Settings</h3>
        <form onSubmit={handleSubmitProfile} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Theme Settings */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Theme Settings</h3>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkModeToggle}
            onChange={(e) => setDarkModeToggle(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded dark:bg-[#1f1f1f]"
          />
          <label htmlFor="darkModeToggle" className="text-sm">
            Enable Dark Mode
          </label>
        </div>
        <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
          (Note: This toggle is just a placeholder. Your global dark mode might 
          be managed elsewhere.)
        </p>
      </div>

      {/* Notification Settings */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Notification Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="emailNotifications"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded dark:bg-[#1f1f1f]"
            />
            <label htmlFor="emailNotifications" className="text-sm">
              Email Notifications
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="smsNotifications"
              checked={smsNotifications}
              onChange={(e) => setSmsNotifications(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded dark:bg-[#1f1f1f]"
            />
            <label htmlFor="smsNotifications" className="text-sm">
              SMS Notifications
            </label>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Security Settings</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Manage your account security and passwords.
        </p>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Change Password
        </button>
      </div>
    </div>
  );
}
