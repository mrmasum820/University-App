import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchFieldProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder = "Search...",
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
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded">
        <FiSearch className="h-5 w-5 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchField;
