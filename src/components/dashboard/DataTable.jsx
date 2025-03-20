"use client";

import { useState, useMemo } from 'react';

export default function DataTable() {
  // Extended sample data with 15 rows
  const sampleData = [
    { id: 1, name: 'John Doe', sales: 1200 },
    { id: 2, name: 'Jane Smith', sales: 1800 },
    { id: 3, name: 'Mike Johnson', sales: 900 },
    { id: 4, name: 'Alice Cooper', sales: 1500 },
    { id: 5, name: 'Bob Brown', sales: 1100 },
    { id: 6, name: 'Carol White', sales: 1400 },
    { id: 7, name: 'David Green', sales: 2000 },
    { id: 8, name: 'Eva Black', sales: 1700 },
    { id: 9, name: 'Frank Moore', sales: 1300 },
    { id: 10, name: 'Grace Lee', sales: 1600 },
    { id: 11, name: 'Hank Miller', sales: 950 },
    { id: 12, name: 'Ivy Wilson', sales: 1250 },
    { id: 13, name: 'Jack Taylor', sales: 1900 },
    { id: 14, name: 'Kate Brown', sales: 1150 },
    { id: 15, name: 'Leo Davis', sales: 1050 },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc"); // "asc" or "desc"
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 14;

  // Filter data based on search query
  const filteredData = useMemo(() => {
    return sampleData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sampleData, searchQuery]);

  // Sort filtered data based on sortColumn and sortDirection
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredData, sortColumn, sortDirection]);

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      // Toggle sort direction if clicking the same column
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Data Table</h2>
      
      {/* Filter Input */}
      <div className="mb-4">
        <input 
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => { 
            setSearchQuery(e.target.value); 
            setCurrentPage(1); // reset to first page when filtering
          }}
          className="p-2 border border-gray-300 dark:border-gray-600 rounded w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border dark:border-gray-600">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th 
                className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer"
                onClick={() => handleSort("id")}
              >
                ID {sortColumn === "id" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th 
                className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name {sortColumn === "name" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th 
                className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer"
                onClick={() => handleSort("sales")}
              >
                Sales {sortColumn === "sales" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <tr key={row.id} className="bg-white dark:bg-gray-800">
                  <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">{row.id}</td>
                  <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">{row.name}</td>
                  <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">${row.sales.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200" colSpan="3">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-800 dark:text-gray-200">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
