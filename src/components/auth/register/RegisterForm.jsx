"use client";

import { useRouter } from "next/navigation";

export default function RegisterForm({ setIsLoading }) {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a delay (e.g., for API registration)
    setTimeout(() => {
      // After registration logic, navigate to login page.
      router.push("/signin/login");
    }, 1500);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
        Create an Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Register
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <a href="/signin/login" className="text-blue-500 hover:text-blue-600">
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
