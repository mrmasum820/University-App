import Image from "next/image";
import React, { useState } from "react";

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
  itemActionClassName?: string;
  onRowClick?: (row: T, index: number) => void;
  onEditRow?: (updatedRow: T, index: number) => void;
  onDeleteRow?: (row: T, index: number) => void;
  onBulkDelete?: (selectedRows: T[]) => void;
}

const statusColors: Record<string, string> = {
  Completed: "bg-green-700 text-white",
  Pending: "bg-yellow-500 text-gray-700",
  Received: "bg-orange-500 text-gray-700",
  Declined: "bg-red-700 text-white",
};

const DataTableWithCheckbox = <T,>({
  columns,
  data,
  emptyState,
  itemActionClassName = "left-50 top-12 bottom-0",
  onRowClick,
  onDeleteRow,
  onEditRow,
  onBulkDelete,
}: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleRowSelection = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
  };

  const handleSave = (index: number) => {
    onEditRow?.(data[index], index);
    // setEditingRow(null);
  };

  return (
    <div className="overflow-x-auto">
      <div className="mb-2 flex justify-between items-center">
        {selectedRows.length > 0 && (
          <button
            onClick={() => {
              onBulkDelete?.(selectedRows.map((index) => data[index]));
              setSelectedRows([]);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete Selected ({selectedRows.length})
          </button>
        )}
      </div>

      <table className="min-w-full bg-white shadow-md">
        <thead className="bg-white border-b border-gray-200 shadow p-4">
          <tr>
            <th className="px-4 py-2">
              <input
                type="checkbox"
                className="w-6 h-6"
                checked={selectedRows.length === data.length}
                onChange={toggleSelectAll}
              />
            </th>
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
            data.map((row, index) => {
              return (
                <tr
                  key={index}
                  className={`cursor-pointer transition group hover:bg-gray-100 relative h-24  ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                  onClick={() => onRowClick?.(row, index)}
                >
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      className="w-6 h-6"
                      onChange={() => toggleRowSelection(index)}
                    />
                  </td>

                  {columns
                    .filter((col) => !col.hidden)
                    .map((col) => {
                      const status = row[col.key]?.toString() || "default";
                      const statusClass =
                        statusColors[status] || "bg-gray-100 text-gray-700";
                      return (
                        <td key={String(col.key)} className="p-4 py-2">
                          <div>
                            {col.key === "status" ? (
                              <span
                                className={`px-3 py-2 text-sm font-medium rounded ${statusClass}`}
                              >
                                {String(row[col.key])}
                              </span>
                            ) : col.key.toString().includes("image") ||
                              col.key.toString().includes("photo") ? (
                              <Image
                                src={
                                  row[col.key] === null ||
                                  row[col.key] === undefined ||
                                  row[col.key] === ""
                                    ? "/avatar.png"
                                    : String(row[col.key])
                                }
                                width={64}
                                height={64}
                                alt="Image"
                                className="w-12 h-12 object-cover rounded"
                              />
                            ) : typeof row[col.key] === "object" &&
                              row[col.key] !== null ? (
                              // Display Main Text with Subtitle
                              <div className="mt-2">
                                <p className="font-semibold">
                                  {
                                    (
                                      row[col.key] as {
                                        main: string;
                                        subtitle?: string;
                                      }
                                    ).main
                                  }
                                </p>
                                {(
                                  row[col.key] as {
                                    main: string;
                                    subtitle?: string;
                                  }
                                ).subtitle && (
                                  <p className="text-sm text-gray-500">
                                    {
                                      (
                                        row[col.key] as {
                                          main: string;
                                          subtitle?: string;
                                        }
                                      ).subtitle
                                    }
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div>
                                <p
                                  className={`mt-2 mb-4 ${
                                    col.color
                                      ? col.color
                                      : "text-gray-900 font-semibold"
                                  } `}
                                >
                                  {String(row[col.key])}
                                </p>
                              </div>
                            )}
                            {/* {i === 0 ? (
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
                                <span className="text-gray-400">|</span>
                                <button
                                  className="text-blue-500"
                                  onClick={() => handleSave(index)}
                                >
                                  View Application
                                </button>
                                <span className="text-gray-400">|</span>
                                <button
                                  className="text-blue-500"
                                  onClick={() => handleSave(index)}
                                >
                                  Download
                                </button>
                              </div>
                            ) : (
                              <div className="py-3 mt-2"></div>
                            )} */}
                          </div>
                        </td>
                      );
                    })}
                  {/* Edit Button (Only Visible on Hover) */}
                  <td
                    className={`absolute ${itemActionClassName} flex justify-center items-center opacity-0 group-hover:opacity-100 transition`}
                  >
                    <div className="flex gap-2 mt-2">
                      <button
                        className="text-blue-500 cursor-pointer"
                        onClick={() => handleSave(index)}
                      >
                        Edit
                      </button>
                      <span className="text-gray-400">|</span>
                      <button
                        className="text-red-500 cursor-pointer"
                        onClick={() => onDeleteRow?.(row, index)}
                      >
                        Trash
                      </button>
                      <span className="text-gray-400">|</span>
                      <button
                        className="text-blue-500 cursor-pointer"
                        onClick={() => handleSave(index)}
                      >
                        View Application
                      </button>
                      {/*<span className="text-gray-400">|</span>
                       <button
                        className="text-blue-500 cursor-pointer"
                        onClick={() => handleSave(index)}
                      >
                        Download
                      </button> */}
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={columns.length + 2}
                className="px-4 py-6 text-center"
              >
                {emptyState || (
                  <div className="flex flex-col items-center">
                    <Image
                      src="/avatar.png"
                      width={256}
                      height={256}
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

export default DataTableWithCheckbox;
