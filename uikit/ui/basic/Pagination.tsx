"use client";
import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-end mt-4 p-4">
      {/* Total Items */}
      {totalItems && (
        <span className="text-gray-400 mr-4">{totalItems} Items</span>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
        >
          <MdKeyboardDoubleArrowLeft size={25} />
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:border-gray-500 disabled:text-gray-500 cursor-pointer"
        >
          <MdKeyboardArrowLeft size={25} />
        </button>

        {/* Page Indicator */}
        <span className="px-4 py-1 text-gray-400">
          {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:bg-gray-300 cursor-pointer"
        >
          <MdKeyboardArrowRight size={25} />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-white text-blue-500 rounded border border-blue-500 disabled:bg-gray-300 cursor-pointer"
        >
          <MdKeyboardDoubleArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
