"use client";
import React from "react";
import SingleCheckbox from "./SingleCheckbox"; //needed

interface CheckboxGroupProps {
  options: { label: string; value: string }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  isFlex?: boolean;
}

const MultiCheckbox: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  isFlex = true,
}) => {
  const handleChange = (value: string, checked: boolean) => {
    const newValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((v) => v !== value);
    onChange(newValues);
  };

  return (
    <div className={`my-4 ${isFlex ? "flex space-x-8 flex-wrap" : ""}`}>
      {options.map((option) => (
        <SingleCheckbox
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValues.includes(option.value)}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default MultiCheckbox;
