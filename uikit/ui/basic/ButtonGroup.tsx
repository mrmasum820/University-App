import React, { useState } from "react";

interface ButtonGroupProps {
  options: { label: string; value: string }[];
  onChange?: (selectedValues: string[]) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ options, onChange }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (value: string) => {
    setSelected((prev) => {
      const newSelection = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      onChange?.(newSelection);
      return newSelection;
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-4 py-1 rounded-lg border transition-all ${
            selected.includes(option.value)
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => toggleSelection(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
