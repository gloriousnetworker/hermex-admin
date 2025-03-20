// components/Footer.jsx

export default function Footer() {
    return (
      <footer className="bg-blue-500 text-white py-8 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-lg">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  