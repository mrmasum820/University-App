"use client"
import { ChangeEvent, useEffect, useRef, useState } from "react";

type Option = {
  id: number;
  label: string;
};

type ActionDropdownProps = {
  onChange?: (data: Option) => void;
  options?: Option[];
  enableSearchable?: boolean;
};

// const options: Option[] = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   label: `Action ${i + 1}`,
// }));

export function ActionDropdown({
  onChange,
  enableSearchable = false,
  options = [],
}: ActionDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const [search, setSearch] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);
  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    if (onChange) onChange(option);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredOptions = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded   hover:bg-gray-50 focus:outline-none"
        >
          {selected ? selected.label : "Select..."}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-full max-h-60 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-slate-400 ring-opacity-15">
          {enableSearchable && (
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="w-full px-3 py-1 border-b border-gray-200 text-sm focus:outline-none"
            />
          )}
          <div className="py-1 text-gray-900 max-h-48 overflow-y-auto">
            {filteredOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 ${
                  selected?.id === option.id ? "bg-gray-100 font-medium" : ""
                }`}
              >
                {selected?.id === option.id && (
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
