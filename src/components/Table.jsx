import { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const Table = ({ columns, data }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Get unique column keys
  const columnKeys = columns.map((col) => col.key);

  const filteredData = data.filter((row) => {
    return (
      (filter === "All" || row.type === filter) &&
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      )
    );
  });
  return (
    <div className="p-4 shadow-md rounded-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>

      <div className="flex gap-2 mb-4 text-black">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {columns.some((col) => col.key === "Name") && (
          <select
            className="border p-2 rounded bg-slate-900 text-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            {[...new Set(data.map((row) => row.name))].map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        )}
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="">
            {columns.map((col) => (
              <th key={col.key} className="p-2 text-left">
                {col.label}
              </th>
            ))}
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {columnKeys.map((key) => (
                <td key={key} className="p-2">
                  {row[key]}
                </td>
              ))}
              <td className="p-2 flex gap-2">
                <FaEye className="text-blue-500 cursor-pointer" />
                <FaEdit className="text-green-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
