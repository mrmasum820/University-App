// File: components/FormSelect.tsx
import { cn } from "@/uikit/cn";
import React, { SelectHTMLAttributes, useEffect, useRef, useState } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { DropdownPortal } from "../basic/DropdownPortal";
import { useFormContext } from "./formContext";

interface Option {
  label: string;
  value: number | string;
}

type CustomSelectProps<T extends FieldValues> = {
  options: Option[];
  name: Path<T>;
  searchable?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (val: Record<string, number>) => void;
  placeholder?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

export const FormSelect = <T extends FieldValues>({
  options,
  name,
  searchable = false,
  disabled = false,
  className,
  onChange,
  placeholder="Select",
  ...rest
}: CustomSelectProps<T>) => {
  const { control } = useFormContext<T>();
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 200);

  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    setSearchTerm("");
  };

  const handleClear = (
    e: React.MouseEvent,
    onChange: (value: string) => void
  ) => {
    e.stopPropagation();
    if (disabled) return;
    onChange("");
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : options;

  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const el = listRef.current.children[highlightedIndex] as HTMLElement;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, isOpen]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState }) => {
        const selectedLabel =
          (Array.isArray(options)
            ? options.find((o) => o.value === value)?.label
            : null) || placeholder;
        return (
          <div
            className={cn(
              "relative inline-block w-full text-left",
              disabled && "bg-gray-100 cursor-not-allowed"
            )}
          >
            <div className="flex items-center w-full relative">
              <button
                ref={buttonRef}
                type="button"
                className={cn(
                  "border w-full rounded border-gray-300 h-[45px] text-left px-3 text-gray-500 relative cursor-pointer",
                  fieldState && fieldState.error && "border-red-600",
                  disabled && "opacity-50 cursor-not-allowed",
                  className
                )}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-activedescendant={
                  highlightedIndex >= 0
                    ? `${name}-option-${highlightedIndex}`
                    : undefined
                }
                disabled={disabled}
              >
                {selectedLabel.toString()}
                {isOpen ? (
                  <svg
                    className="size-5 absolute top-1/2 transform -translate-y-1/2 right-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="size-5 absolute top-1/2 transform -translate-y-1/2 right-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </button>

              {value && !disabled && (
                <button
                  type="button"
                  onClick={(e) => handleClear(e, onChange)}
                  className="absolute top-1/2 transform -translate-y-1/2 right-[10px] bg-gray-200 rounded-full p-1 cursor-pointer"
                  title="Clear selection"
                  aria-label="Clear selection"
                >
                  <svg
                    className="w-4 h-4 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {fieldState?.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}

            {isOpen && !disabled && buttonRef.current && (
              <DropdownPortal anchorRef={buttonRef}>
                <div className="mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                  {searchable && (
                    <div className="p-2">
                      <input
                        ref={searchInputRef}
                        type="text"
                        className="w-full border h-[45px] max-h-[45px] border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-gray-100"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                      />
                    </div>
                  )}
                  <ul ref={listRef} role="listbox">
                    {filteredOptions?.length === 0 ? (
                      <li className="px-4 py-2 text-gray-500">
                        No results found.
                      </li>
                    ) : (
                      filteredOptions?.map((opt, i) => (
                        <li
                          key={opt.value}
                          id={`${name}-option-${i}`}
                          role="option"
                          aria-selected={value === opt.value}
                          className={cn(
                            "px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-gray-600",
                            i === highlightedIndex
                              ? "bg-gray-500 text-white"
                              : "",
                            value === opt.value
                              ? "font-semibold bg-gray-800/50"
                              : ""
                          )}
                          onClick={() => {
                            onChange(opt.value);
                            setIsOpen(false);
                          }}
                        >
                          {opt.label}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </DropdownPortal>
            )}
          </div>
        );
      }}
    />
  );
};
