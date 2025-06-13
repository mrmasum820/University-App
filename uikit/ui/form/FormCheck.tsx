import { cn } from "@/uikit/cn";
import { Checkbox, Field, Label } from "@headlessui/react";
import { HTMLProps } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useFormContext } from "./formContext";

type FormCheckProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  label: string;
} & HTMLProps<HTMLInputElement>;

export const FormCheck = <T extends FieldValues>(props: FormCheckProps<T>) => {
  const { control } = useFormContext<T>();
  const { name, label, className, ...rest } = props;

  // Helper function to handle boolean and string conversion
  const handleValueConversion = (value: unknown): boolean => {
    if (typeof value === "string") {
      return value.toLowerCase() === "true"; // Convert string "true" to boolean true
    }
    return !!value; // Fallback to boolean conversion
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ref, value }, fieldState }) => {
        const isChecked = handleValueConversion(value);
        return (
          <Field className="flex items-center gap-2">
            <Checkbox
              ref={ref}
              checked={isChecked}
              onChange={(e) => {
                const newValue = e; // Directly use the boolean value provided by Checkbox
                onChange(newValue); // Pass the boolean value to react-hook-form
              }}
              className={cn(
                "group block size-6 cursor-pointer rounded border border-slate-400 bg-white data-checked:bg-blue-500",
                fieldState?.error && "border-red-400",
                className
              )}
              id={name}
            >
              <svg
                className="stroke-white opacity-0 group-data-checked:opacity-100"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Checkbox>
            <Label
              className={cn("text-gray-500", fieldState?.error && "text-red-500")}
              htmlFor={name}
            >
              {label}
            </Label>
            {fieldState?.error && (
              <span className="text-red-500 text-sm">{fieldState.error.message}</span>
            )}
          </Field>
        );
      }}
    />
  );
};