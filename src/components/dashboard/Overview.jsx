"use client";

export default function Overview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Metrics Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-700 p-4 shadow rounded">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Total Users</h3>
          <p className="text-3xl text-gray-800 dark:text-gray-200">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 shadow rounded">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Active Sessions</h3>
          <p className="text-3xl text-gray-800 dark:text-gray-200">456</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 shadow rounded">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Sales Revenue</h3>
          <p className="text-3xl text-gray-800 dark:text-gray-200">$12,345</p>
        </div>
      </div>
    </div>
  );
}
