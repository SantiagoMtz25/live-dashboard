import React, { useState, useEffect } from 'react';
import ordersData from './Orders.json';

function OrdersTable() {
  const [data, setData] = useState(ordersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [filteredData, setFilteredData] = useState(ordersData);
  const [rangeFilter, setRangeFilter] = useState({ min: '', max: '' });
  const [globalDateFilter, setGlobalDateFilter] = useState({ startDate: '', endDate: '' });

  useEffect(() => {
    let filtered = data;

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter((row) => {
        if (selectedColumn) {
          return row[selectedColumn]
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }
        return Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    // Apply range filter if min and max are specified
    if (selectedColumn && rangeFilter.min !== '' && rangeFilter.max !== '') {
      const min = parseFloat(rangeFilter.min);
      const max = parseFloat(rangeFilter.max);
      filtered = filtered.filter((row) => {
        const value = parseFloat(row[selectedColumn]);
        return value >= min && value <= max;
      });
    }

    // Apply global date range filter if startDate and endDate are specified
    if (globalDateFilter.startDate && globalDateFilter.endDate) {
      const startDate = new Date(globalDateFilter.startDate);
      const endDate = new Date(globalDateFilter.endDate);

      filtered = filtered.filter((row) =>
        Object.values(row).some((value) => {
          const dateValue = new Date(value);
          return !isNaN(dateValue) && dateValue >= startDate && dateValue <= endDate;
        })
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedColumn, rangeFilter, globalDateFilter, data]);

  // Update range filter
  const handleRangeChange = (e) => {
    setRangeFilter({ ...rangeFilter, [e.target.name]: e.target.value });
  };

  // Update global date filter
  const handleGlobalDateChange = (e) => {
    setGlobalDateFilter({ ...globalDateFilter, [e.target.name]: e.target.value });
  };

  return (
    <div className="orders-table-container">
      {/* Global Date Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={globalDateFilter.startDate}
          onChange={handleGlobalDateChange}
          className="text-black p-2 border rounded"
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={globalDateFilter.endDate}
          onChange={handleGlobalDateChange}
          className="text-black p-2 border rounded"
        />
      </div>

      {/* Search and Column Selector */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-black p-2 border rounded"
        />
        
        {/* Column Selector */}
        <select
          value={selectedColumn}
          onChange={(e) => {
            setSelectedColumn(e.target.value);
            setRangeFilter({ min: '', max: '' }); // Reset range filter when column changes
          }}
          className="p-2 border rounded text-black"
        >
          <option value="">All Columns</option>
          {Object.keys(ordersData[0]).map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
      </div>

      {/* Range Filter */}
      {selectedColumn && (
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            name="min"
            placeholder="Min"
            value={rangeFilter.min}
            onChange={handleRangeChange}
            className="text-black p-2 border rounded"
          />
          <input
            type="number"
            name="max"
            placeholder="Max"
            value={rangeFilter.max}
            onChange={handleRangeChange}
            className="text-black p-2 border rounded"
          />
        </div>
      )}

      {/* Table */}
      <div className="overflow-auto" style={{ maxHeight: '400px', maxWidth: '100%' }}>
        <table className="min-w-full border-collapse">
          <thead className="bg-[#293038] text-white sticky top-0">
            <tr>
              {Object.keys(ordersData[0]).map((col) => (
                <th key={col} className="px-4 py-2 border border-gray-400">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="hover:bg-slate-600">
                {Object.values(row).map((cell, i) => (
                  <td key={i} className="px-4 py-2 border border-gray-400">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
