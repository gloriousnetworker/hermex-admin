"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterForm({ setIsLoading }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validations
    if (!form.name.trim()) {
      setError("Full name is required");
      toast.error("Full name is required");
      return;
    }
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
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success("Registration successful!");
        router.push("/signin/login");
      } else {
        const data = await res.json();
        setError(data.message || "Registration failed");
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Error display */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg 
                       dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                       focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg 
                       dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                       focus:outline-none"
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
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg 
                       dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                       focus:outline-none"
            placeholder="Create a password"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 dark:text-gray-300 font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg 
                       dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                       focus:outline-none"
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-full 
                     hover:bg-gray-800 transition"
        >
          Sign in
        </button>

        {/* Already have an account */}
        <p className="text-center text-gray-500 dark:text-gray-300 text-sm mt-4">
          Have an account?{" "}
          <a href="/signin/login" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
