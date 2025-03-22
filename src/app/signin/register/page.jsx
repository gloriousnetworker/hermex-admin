"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "../../../components/auth/register/RegisterForm";
import Loader from "../../../components/loader/Loader";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle day/night mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""} relative`}>
      {/* Loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <Loader />
        </div>
      )}

      {/* Main container with 2 columns */}
      <div className="min-h-screen flex">
        {/* LEFT COLUMN (Background + Round border) */}
        <div
          className="hidden lg:flex w-1/2 bg-cover bg-center relative rounded-r-[80px] overflow-hidden"
          style={{ backgroundImage: "url('/signin_images/background.png')" }}
        >
          {/* Overlay for dark mode */}
          <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50" />

          <div className="relative z-10 flex flex-col justify-center items-center p-8 w-full h-full">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="The Matrix Logo"
              className="mb-8 h-16 w-auto object-contain"
            />

            <h2 className="text-white dark:text-gray-200 text-3xl font-bold mb-2">
              Get started with us
            </h2>
            <p className="text-white dark:text-gray-300 text-sm mb-8 text-center max-w-xs">
              Start your journey towards data-driven success.
            </p>

            {/* Social Buttons (rounded-full) */}
            <button className="flex items-center justify-center w-64 mb-4 bg-white hover:bg-gray-100 text-gray-700 py-3 px-6 rounded-full shadow">
              <img
                src="/signin_images/google.png"
                alt="Google icon"
                className="h-5 w-5 mr-2 object-contain"
              />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center w-64 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow">
              <img
                src="/signin_images/facebook.png"
                alt="Facebook icon"
                className="h-5 w-5 mr-2 object-contain"
              />
              Sign in with Facebook
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (Register Form) */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white dark:bg-gray-900 px-8 py-12 relative">
          {/* Day/Night Toggle */}
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 text-sm py-1 px-3 border border-gray-300 dark:border-gray-600 
                       rounded-full bg-transparent text-gray-700 dark:text-gray-200 
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Title (black in light mode, silver in dark mode) */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-black dark:text-[#C0C0C0] mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Start your journey towards data-driven success.
            </p>
          </div>

          {/* Form Container */}
          <div className="w-full max-w-sm">
            <RegisterForm setIsLoading={setIsLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
