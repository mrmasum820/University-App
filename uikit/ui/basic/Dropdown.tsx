import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  options: string[];
  label?: string;
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        className="w-full flex justify-between items-center px-4 py-2 border rounded shadow-sm bg-white text-gray-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || label || "Select"}
        <FaChevronDown
          className={`ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
