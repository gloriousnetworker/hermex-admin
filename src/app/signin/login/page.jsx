"use client";

import { useState } from "react";
import Navbar from "../../../components/auth/login/Navbar";
import LoginForm from "../../../components/auth/login/LoginForm";
import Footer from "../../../components/auth/login/Footer";
import Loader from "../../../components/loader/Loader";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative">
      {/* Loader overlay: centered, full screen */}
      {isLoading && <Loader />}
      <Navbar />
      <main className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {/* Pass down setIsLoading so the form can trigger the loader */}
          <LoginForm setIsLoading={setIsLoading} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
