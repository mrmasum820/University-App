"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiCalendarDateRange } from "react-icons/hi2";

interface DatePickerProps {
  label?: string;
  selectedDate?: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}

export default function TextFieldDate({
  label,
  selectedDate,
  onChange,
  placeholder = "YYYY-MM-DD",
}: DatePickerProps) {
  return (
    <div>
      {label && (
        <label className="block font-semibold text-gray-600 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          dateFormat="yyyy-MM-dd"
          className="w-full min-w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          wrapperClassName="w-full"
          // customInput={<input className="w-full border rounded p-2" />}
          placeholderText={placeholder}
        />
        <div className="absolute right-0 top-0 bottom-0 bg-gray-300 p-2">
          <HiCalendarDateRange size={20} className=" text-gray-500" />
        </div>
      </div>
    </div>
  );
}
