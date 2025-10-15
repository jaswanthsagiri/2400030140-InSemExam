import React, { useState } from "react";
import './index.css';

const employeeData = [
  { name: 'Alice', department: 'Engineering', salary: 70000 },
  { name: 'Bob', department: 'Marketing', salary: 50000 },
  { name: 'Charlie', department: 'HR', salary: 60000 },
  { name: 'David', department: 'Engineering', salary: 80000 },
];

export default function App() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedData = [...employeeData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];

    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('department')}>Department</th>
          <th onClick={() => handleSort('salary')}>Salary</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((emp, index) => (
          <tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
