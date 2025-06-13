import React from "react";

interface RadioButtonProps {
  name: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  isFlex?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  isFlex = true,
}) => {
  return (
    <div className={`${isFlex ? "flex items-center space-x-4" : ""}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`${
            isFlex
              ? "flex items-center space-x-2"
              : "flex items-start space-x-2 space-y-4"
          } cursor-pointer`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center p-3 ${
              selectedValue === option.value
                ? "border-blue-500"
                : "border-gray-400"
            }`}
          >
            {selectedValue === option.value && (
              <div className="w-2 h-2 flex justify-center items-center bg-blue-500 rounded-full p-2"></div>
            )}
          </div>
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
