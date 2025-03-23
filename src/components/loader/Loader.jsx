"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Loader() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const loaderSrc = theme === "light" 
    ? "/signin_images/loader-light.png" 
    : "/signin_images/loader.png";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Outer container for the rotating gradient circle */}
      <div className="relative w-24 h-24">
        {/* Gradient ring (rotating) */}
        <div className="absolute inset-0 rounded-full animate-rotate bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          {/* Inner circle (solid background) */}
          <div className="absolute inset-[2px] bg-white dark:bg-[#1e1e1e] rounded-full"></div>
        </div>

        {/* Centered logo with a beeping (scale) animation */}
        <img
          src={loaderSrc}
          alt="Logo"
          className="
            w-12 h-12
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            animate-beep
          "
        />
      </div>
    </div>
  );
}
