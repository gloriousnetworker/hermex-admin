"use client";

import { useState, useMemo } from 'react';

export default function DataTable() {
  // Initial sample data with 15 rows
  const initialData = [
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

  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc"); // "asc" or "desc"
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editedRecord, setEditedRecord] = useState({ name: "", sales: "" });

  const pageSize = 14;

  // Filter data based on search query
  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  // Sort filtered data
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
      // Toggle sort direction if same column is clicked
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Handle delete record
  const handleDelete = (id) => {
    setData(prev => prev.filter(record => record.id !== id));
    // Adjust current page if needed
    if ((currentPage - 1) * pageSize >= sortedData.length - 1) {
      setCurrentPage(Math.max(currentPage - 1, 1));
    }
  };

  // Start editing a record
  const handleEdit = (record) => {
    setEditingId(record.id);
    setEditedRecord({ name: record.name, sales: record.sales });
  };

  // Save edited record
  const handleSave = (id) => {
    setData(prev =>
      prev.map(record =>
        record.id === id
          ? { ...record, name: editedRecord.name, sales: Number(editedRecord.sales) }
          : record
      )
    );
    setEditingId(null);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  // Add a new record
  const handleAddRecord = () => {
    if (data.length >= 25) return; // Limit to 25 records
    // Generate a new id based on the highest current id
    const newId = Math.max(...data.map(d => d.id)) + 1;
    const newRecord = { id: newId, name: "New Name", sales: 0 };
    setData(prev => [...prev, newRecord]);
    // If the new record would be on a different page, adjust the currentPage
    if (Math.ceil((data.length + 1) / pageSize) > totalPages) {
      setCurrentPage(totalPages + 1);
    }
    // Start editing the new record
    setEditingId(newId);
    setEditedRecord({ name: "", sales: "" });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 sm:mb-0">
          Data Table
        </h2>
        <button
          onClick={handleAddRecord}
          disabled={data.length >= 25}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          Add Record
        </button>
      </div>

      {/* Filter Input */}
      <div className="mb-4">
        <input 
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => { 
            setSearchQuery(e.target.value); 
            setCurrentPage(1);
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
              <th className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <tr key={row.id} className="bg-white dark:bg-gray-800">
                  <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">{row.id}</td>
                  <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">
                    {editingId === row.id ? (
                      <input 
                        type="text"
                        value={editedRecord.name}
                        onChange={(e) => setEditedRecord({...editedRecord, name: e.target.value})}
                        className="p-1 border border-gray-300 dark:border-gray-600 rounded"
                      />
                    ) : (
                      row.name
                    )}
                  </td>
                  <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">
                    {editingId === row.id ? (
                      <input 
                        type="number"
                        value={editedRecord.sales}
                        onChange={(e) => setEditedRecord({...editedRecord, sales: e.target.value})}
                        className="p-1 border border-gray-300 dark:border-gray-600 rounded w-24"
                      />
                    ) : (
                      `$${row.sales.toLocaleString()}`
                    )}
                  </td>
                  <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200">
                    {editingId === row.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSave(row.id)}
                          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(row)}
                          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-2 px-4 border dark:border-gray-600 text-gray-800 dark:text-gray-200" colSpan="4">
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
