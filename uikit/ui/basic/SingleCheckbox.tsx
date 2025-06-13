"use client";
import React from "react";

interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  textColor?: string;
  onChange: (value: string, checked: boolean) => void;
  isCenter?: boolean;
}

const SingleCheckbox: React.FC<CheckboxProps> = ({
  label,
  value,
  checked,
  onChange,
  textColor,
  isCenter = true,
}) => {
  return (
    <label
      className={`flex ${
        isCenter ? "items-center" : "items-start"
      } space-x-2 cursor-pointer`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(value, e.target.checked)}
        className="hidden"
      />
      <div
        className={`w-6 h-6 border-1 rounded flex items-center justify-center p-3 ${
          checked ? "border-blue-500 bg-blue-500" : "border-gray-400"
        }`}
      >
        {checked && <span className="text-white font-bold">✔</span>}
      </div>
      <span className={`${textColor ? textColor : "text-gray-500"}`}>
        {label}
      </span>
    </label>
  );
};

export default SingleCheckbox;
