import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface FieldWithButtonProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const FieldWithButton: React.FC<FieldWithButtonProps> = ({
  placeholder = "Add Stage",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative min-w-80">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full pl-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded">
        <FaPlus className="h-5 w-5 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default FieldWithButton;
