"use client";
import { cn } from "@/uikit";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFetchList } from "../useFetch";
import Pagination from "./pagination";
import TableSkeleton from "./table-skeleton";
import { pageSize, TableHookProps } from "./types";

const useTable = <T,>({
  tableHeader,
  tableFilter,
  fetchList,
}: TableHookProps<T>) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [rowSelection, setRowSelection] = useState({});
  const tableData = useFetchList<T>({
    params: fetchList.params,
    queryKey: {
      mainKey: fetchList?.queryKey,
      paramsKey: fetchList?.params || {},
    },
    queryFnApi: fetchList.queryFnApi,
    staleTime: fetchList.staleTime,
  });

  useEffect(() => {
    router.push(`?page=${page}&status=active`);
    if (page > 1) {
      tableData.refetch();
    }
  }, [page, router]);

  const table = useReactTable({
    data: (tableData && tableData?.data?.items) || [],
    columns: tableHeader,
    state: {
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const component = () => {
    if (tableData?.isLoading) {
      return <TableSkeleton table={table} pageSize={pageSize} />;
    }

    if (tableData?.isSuccess) {
      return (
        <>
          {tableFilter({ table, tableData: tableData?.data })}
          {tableData?.isFetching ? (
            <>
              <TableSkeleton table={table} pageSize={pageSize} />
            </>
          ) : (
            <>
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
                            {header.isPlaceholder ? null : (
                              <>
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {/* {header.column.getCanFilter() ? (
                                  <div>
                                    <Filter column={header.column} table={table} />
                                  </div>
                                ) : null} */}
                              </>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => {
                    return (
                      <tr
                        key={row.id}
                        className={cn(
                          "cursor-pointer transition group hover:bg-gray-100 relative h-24 odd: bg-gray-200 even:bg-white"
                        )}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td key={cell.id} className="p-4 py-2">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          )}

          <Pagination
            table={table}
            tableData={tableData}
            page={page}
            setPage={setPage}
          />
        </>
      );
    }
  };

  return {
    component,
    tableData: tableData?.data,
    table,
  };
};

export default useTable;
