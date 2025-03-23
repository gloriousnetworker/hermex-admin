"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  // Ensure hooks are always called in the same order
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme } = useTheme(); // always call this unconditionally

  if (!mounted) return null; // delay rendering until mounted

  // Choose logo based on the current theme
  const logoSrc = theme === "light" ? "/logo-dark.png" : "/logo.png";

  // Navigation items (all route to /dashboard in this example)
  const navigation = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Sales", href: "/dashboard" },
    { label: "Analytics", href: "/dashboard" },
    { label: "Reports", href: "/dashboard" },
    { label: "Profile", href: "/dashboard" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logoSrc}
            width={64}
            height={64}
            className="w-16"
            alt="Logo"
          />
          <span className="text-2xl font-bold text-indigo-500 dark:text-gray-100">
            The Mini BI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-indigo-500"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/signin/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md"
          >
            Get Started
          </Link>
          <ThemeChanger />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeChanger />
          <Disclosure>
            {({ open }) => (
              <div>
                <Disclosure.Button className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
                  <div className="flex flex-col p-4 space-y-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-indigo-500"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/signin/login"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </nav>
    </div>
  );
};
