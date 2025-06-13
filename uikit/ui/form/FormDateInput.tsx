// /components/FormDateInput.tsx
"use client";

import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, FieldValues, Path } from "react-hook-form";
import { HiCalendarDateRange } from "react-icons/hi2";
import { useFormContext } from "./formContext";

interface DatePickerProps {
  label?: string;
  selectedDate?: Date | string | null; // Updated: accept string too
  onChange?: (date: Date | null) => void;
  placeholder?: string;
}

export function DateInput({
  label = "Select Date",
  selectedDate,
  onChange,
  placeholder = "YYYY-MM-DD",
}: DatePickerProps) {
  const ExampleCustomInput = forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
    <div className="relative">
      <input
        className="w-full border h-[45px] max-h-[45px] border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400 flex justify-between"
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder={placeholder}
        readOnly
      />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 h-full w-10 rounded-tr-md rounded-br-md">
        <div className="flex justify-center items-center h-full">
          <HiCalendarDateRange size={22} className="text-gray-500" />
        </div>
      </div>
    </div>
  ));
  ExampleCustomInput.displayName = "ExampleCustomInput";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-base font-semibold text-gray-700">{label}</label>
      <DatePicker
        selected={selectedDate ? new Date(selectedDate) : null} // string to Date
        onChange={onChange}
        customInput={<ExampleCustomInput />}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
}

interface FormDateInputControllerProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
}

export function FormDateInput<T extends FieldValues>({
  name,
  label,
  placeholder,
}: FormDateInputControllerProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DateInput
          label={label}
          selectedDate={field.value}
          onChange={(date) => {
            if (date) {
              const isoString = date.toISOString();
              field.onChange(isoString);
            } else {
              field.onChange(null);
            }
          }}
          placeholder={placeholder}
        />
      )}
    />
  );
}
