"use client";
import React, { Dispatch } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

type PaginationProps = {
  table: any;
  tableData?: any;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({
  table,
  tableData,
  page,
  setPage,
}) => {
  const totalPage = (tableData && tableData?.data?.total_pages) || 0;
  return (
    <div className="flex items-center justify-end mt-4 p-4">
      {/* Total Items */}
      {tableData && (
        <span className="text-gray-400 mr-4">
          {tableData?.data?.total} Items
        </span>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(1)}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
        >
          <MdKeyboardDoubleArrowLeft size={25} />
        </button>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
        >
          <MdKeyboardArrowLeft size={25} />
        </button>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {page} of {totalPage}
          </strong>
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
        >
          <MdKeyboardArrowRight size={25} />
        </button>
        <button
          onClick={() => setPage(totalPage)}
          disabled={page === totalPage}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
        >
          <MdKeyboardDoubleArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
