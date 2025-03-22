"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full animate-rotate bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          <div className="absolute inset-[2px] bg-white dark:bg-[#1e1e1e] rounded-full"></div>
        </div>
        <Image
          src="/signin_images/loader.png" // absolute path from the public folder
          alt="Logo"
          width={48}
          height={48}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-beep"
        />
      </div>
    </div>
  );
}
