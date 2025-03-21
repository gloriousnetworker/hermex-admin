// components/auth/login/LoginForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginForm({ setIsLoading }) {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", keepLoggedIn: false });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Logged in user name:", data.name); // Check what is returned
        Cookies.set("authToken", data.token, { expires: form.keepLoggedIn ? 7 : undefined });
        Cookies.set("keepLoggedIn", form.keepLoggedIn);
        localStorage.setItem("keepLoggedIn", form.keepLoggedIn);
        // Save user's name in localStorage; if data.name is undefined, it will be null
        localStorage.setItem("userName", data.name || "John Doe");
        router.push("/dashboard");
      } else {
        const data = await res.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
        Login to Your Account
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="keepLoggedIn"
            checked={form.keepLoggedIn}
            onChange={handleChange}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="keepLoggedIn" className="ml-2 text-gray-700 dark:text-gray-300">
            Keep me logged in
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Login
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <a href="/signin/register" className="text-blue-500 hover:text-blue-600">Register here</a>
          </p>
        </div>
      </form>
    </div>
  );
}
