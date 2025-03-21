"use client";

import { useRouter } from "next/navigation";

export default function LoginForm({ setIsLoading }) {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a delay for the loader before navigating
    setTimeout(() => {
      // Authentication logic can be added here.
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
        Login to Your Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="keepLoggedIn"
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
            <a href="/signin/register" className="text-blue-500 hover:text-blue-600">
              Register here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
