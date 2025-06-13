import { cn } from "@/uikit";
import { Skeleton } from "@/uikit/ui";
import { Table } from "@tanstack/react-table";
import { Fragment } from "react";

type TableSkeletonProps = {
  table: Table<any>;
  pageSize: number;
};

export default function TableSkeleton({ table, pageSize }: TableSkeletonProps) {
  return (
    <table className="min-w-full bg-white shadow-md">
      <thead className="bg-white border-b border-gray-200 shadow p-4">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 py-3 text-gray-500 text-left"
                >
                  <Skeleton className="h-[30px] bg-gray-500 rounded animate-pulse w-full" />
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {[...Array(pageSize)].map((_, index) => (
          <tr
            key={index}
            className={cn(
              "cursor-pointer transition group hover:bg-gray-100 relative h-24 odd: bg-gray-100 even:bg-white"
            )}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <td
                      key={header.id}
                      colSpan={header.colSpan}
                      className="p-4 py-2"
                    >
                      <Skeleton className="h-[25px] bg-gray-400 rounded animate-pulse w-full" />
                    </td>
                  );
                })}
              </Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
