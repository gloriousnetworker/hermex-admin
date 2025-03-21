"use client";

import { useState } from "react";
import Navbar from "../../../components/auth/register/Navbar";
import RegisterForm from "../../../components/auth/register/RegisterForm";
import Footer from "../../../components/auth/register/Footer";
import Loader from "../../../components/loader/Loader";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative">
      {/* Loader overlay */}
      {isLoading && <Loader />}
      <Navbar />
      <main className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <RegisterForm setIsLoading={setIsLoading} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
