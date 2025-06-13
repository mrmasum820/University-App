import React from "react";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const Textarea: React.FC<TextAreaProps> = ({
  label,
  placeholder = "Type here...",
  rows = 4,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-700 font-semibold mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default Textarea;
