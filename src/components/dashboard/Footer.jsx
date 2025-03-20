"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} BI Tool. All rights reserved.</p>
    </footer>
  );
}
