"use client";
import { cn } from "@/uikit/cn";
import { HTMLProps, useEffect, useRef } from "react";

type CheckboxProps = {
  label?: string;
  className?: string;
  indeterminate?: boolean;
  id: string;
} & HTMLProps<HTMLInputElement>;

export function Checkbox({
  indeterminate,
  label,
  id = "check",
  className,
  children,
  ...rest
}: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);
  return (
    <div className="inline-flex items-center">
      <label className="flex items-center cursor-pointer relative" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          className={cn(
            "peer h-6 w-6 cursor-pointer transition-all appearance-none rounded  border border-slate-400 checked:bg-blue-600 checked:border-blue-600",
            className
          )}
          ref={ref}
          {...rest}
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      {label && (
        <label className="text-gray-500 ml-2" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
