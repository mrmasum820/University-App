"use client";
import Image from "next/image";
import React from "react";

interface Column<T> {
  key: keyof T;
  label: string;
  hidden?: boolean;
  color?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyState?: React.ReactNode;
  onRowClick?: (row: T, index: number) => void;
  onDeleteRow?: (row: T, index: number) => void;
  onEditRow?: (updatedRow: T, index: number) => void;
}

const DataTable = <T,>({
  columns,
  data,
  emptyState,
  onRowClick,
  onDeleteRow,
  onEditRow,
}: DataTableProps<T>) => {
  //     const [selectedRows, setSelectedRows] = useState<number[]>([]);
  //   const [editingRow, setEditingRow] = useState<number | null>(null);
  //   const [editedData, setEditedData] = useState<T[]>(data);

  // Handle input changes when editing
  //   const handleEditChange = (index: number, key: keyof T, value: any) => {
  //     const updatedData = [...editedData];
  //     updatedData[index] = { ...updatedData[index], [key]: value };
  //     setEditedData(updatedData);
  //   };

  // Save edits
  const handleSave = (index: number) => {
    onEditRow?.(data[index], index);
    // setEditingRow(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md">
        <thead className="bg-white border-b border-gray-200 shadow p-4">
          <tr>
            {columns
              .filter((col) => !col.hidden)
              .map((col) => (
                <th
                  key={String(col.key)}
                  className="px-4 py-2 text-gray-500 text-left"
                >
                  {col.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={index}
                className={`cursor-pointer transition-all ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
                onClick={() => onRowClick?.(row, index)}
              >
                {columns
                  .filter((col) => !col.hidden)
                  .map((col, index) => (
                    <td key={String(col.key)} className="p-4 py-2">
                      <div>
                        <p
                          className={`mt-2 ${
                            col.color ? col.color : "text-gray-400"
                          } `}
                        >
                          {String(row[col.key])}
                        </p>
                        {index === 0 ? (
                          <div className="flex gap-2 mt-2">
                            <button
                              className="text-blue-500"
                              onClick={() => handleSave(index)}
                            >
                              Edit
                            </button>
                            <span className="text-gray-400">|</span>
                            <button
                              className="text-red-500"
                              onClick={() => onDeleteRow?.(row, index)}
                            >
                              Trash
                            </button>
                          </div>
                        ) : (
                          <div className="py-3 mt-2"></div>
                        )}
                      </div>
                    </td>
                  ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-4 py-6 text-center">
                {emptyState || (
                  <div className="flex flex-col items-center">
                    <Image
                      src="/login.jpg"
                      alt="No data"
                      className="w-40 h-40"
                    />
                    <p className="text-gray-500 mt-2">No data available</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                      Add New Item
                    </button>
                  </div>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
