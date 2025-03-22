"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/LoginLoader"; 

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", keepLoggedIn: false });
  const [error, setError] = useState("");
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

  // Validate email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Hardcoded immediate login (with loader delay)
  const handleImmediateLogin = (name) => {
    Cookies.set("authToken", "fake-jwt-token", { expires: form.keepLoggedIn ? 7 : undefined });
    Cookies.set("keepLoggedIn", form.keepLoggedIn);
    localStorage.setItem("keepLoggedIn", form.keepLoggedIn);
    localStorage.setItem("userName", name);
    toast.success("Login successful!");
    // Delay navigation to show loader
    setTimeout(() => {
      router.push("/dashboard");
      setIsLoading(false);
    }, 1500);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setError("");
    setIsLoading(true);

    // Hardcoded credentials check
    const normalizedEmail = form.email.trim().toLowerCase();
    if (form.password === "1234567890") {
      if (normalizedEmail === "test@gmail.com") {
        return handleImmediateLogin("Test User");
      } else if (normalizedEmail === "mano@gmail.com") {
        return handleImmediateLogin("Mano");
      } else if (normalizedEmail === "beatriceomor@gmail.com") {
        return handleImmediateLogin("Beatrice Omor");
      } else if (normalizedEmail === "admin@gmail.com") {
        return handleImmediateLogin("BrandDrive Admin");
      }
    }

    // Otherwise, call the API
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        Cookies.set("authToken", data.token, { expires: form.keepLoggedIn ? 7 : undefined });
        Cookies.set("keepLoggedIn", form.keepLoggedIn);
        localStorage.setItem("keepLoggedIn", form.keepLoggedIn);
        localStorage.setItem("userName", data.name || "John Doe");
        toast.success("Login successful!");
        setTimeout(() => {
          router.push("/dashboard");
          setIsLoading(false);
        }, 1500);
      } else {
        const data = await res.json();
        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Something went wrong");
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  // Form change handler
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
  };

  return (
    <div className={`${darkMode ? "dark" : ""} relative`}>
      {/* Render Loader directly if isLoading is true */}
      {isLoading && <Loader />}

      {/* Container with 2 columns */}
      <div className="min-h-screen flex">
        {/* LEFT COLUMN */}
        <div
          className="hidden lg:flex w-1/2 bg-cover bg-center relative rounded-r-[80px] overflow-hidden"
          style={{ backgroundImage: "url('/signin_images/background.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50" />
          <div className="relative z-10 flex flex-col justify-center items-center p-8 w-full h-full">
            <img
              src="/logo.png"
              alt="The Matrix Logo"
              className="mb-8 h-16 w-auto object-contain"
            />
            <h2 className="text-white dark:text-gray-200 text-3xl font-bold mb-2">
              Get started with us
            </h2>
            <p className="text-white dark:text-gray-300 text-sm mb-8 text-center max-w-xs">
              Complete these easy steps to register your account.
            </p>
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

        {/* RIGHT COLUMN (Login Form) */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white dark:bg-gray-900 px-8 py-12 relative">
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 text-sm py-1 px-3 border border-gray-300 dark:border-gray-600 rounded-full bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-[#000000] dark:text-[#C0C0C0]">
              Welcome Back!
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Enter your email and password to access your account
            </p>
          </div>
          <div className="w-full max-w-sm">
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="keepLoggedIn"
                    checked={form.keepLoggedIn}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="keepLoggedIn" className="ml-2 text-gray-700 dark:text-gray-300">
                    Keep me logged in
                  </label>
                </div>
                <a
                  href="/signin/reset-password"
                  className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400"
                >
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                Log in
              </button>
            </form>
            <p className="text-center text-gray-500 dark:text-gray-300 text-sm mt-4">
              Don't have an account?{" "}
              <a href="/signin/register" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
