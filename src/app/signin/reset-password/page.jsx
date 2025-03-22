"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader"; 

export default function ResetPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Toggle day/night mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Validate email
  const validateEmail = (emailAddress) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulate API call and then navigate to /reset/new-password
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Reset link sent! Please check your email.");
      router.push("/signin/reset-password/new-password");
    }, 1500);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} relative`}>
      {/* Loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <Loader />
        </div>
      )}

      {/* Container with 2 columns */}
      <div className="min-h-screen flex">
        {/* LEFT COLUMN (Background + Card with a round border on the right side) */}
        <div
          className="hidden lg:flex w-1/2 bg-cover bg-center relative rounded-r-[80px] overflow-hidden"
          style={{ backgroundImage: "url('/signin_images/background.png')" }}
        >
          {/* Overlay to darken if in night mode or add a tinted background */}
          <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50" />

          <div className="relative z-10 flex flex-col justify-center items-center p-8 w-full h-full">
            {/* Logo on top */}
            <img
              src="/logo.png"
              alt="The Matrix Logo"
              className="mb-8 h-16 w-auto object-contain"
            />

            <h2 className="text-white dark:text-gray-200 text-3xl font-bold mb-2">
              Get started with us
            </h2>
            <p className="text-white dark:text-gray-300 text-sm mb-8 text-center max-w-xs">
              Complete these easy steps to reset your password.
            </p>

            {/* Social Buttons (rounded-full) with PNG icons */}
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

        {/* RIGHT COLUMN (Reset Form) */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white dark:bg-gray-900 px-8 py-12 relative">
          {/* Day/Night Toggle with a sleek border and transparent background */}
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 text-sm py-1 px-3 border border-gray-300 dark:border-gray-600 
              rounded-full bg-transparent text-gray-700 dark:text-gray-200 
              hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Reset Password Title */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-black dark:text-[#C0C0C0]">
              Reset password
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Enter your email address and we'll send you instructions to reset your password
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-sm">
            {error && (
              <p className="text-red-500 text-center mb-4">{error}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg 
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                    focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Reset
              </button>
            </form>

            {/* Back to Login */}
            <p className="text-center text-gray-500 dark:text-gray-300 text-sm mt-4">
              <a
                href="/signin/login"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                Back to Login?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
