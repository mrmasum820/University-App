import { cn } from "@/uikit/cn";
import { Fragment, InputHTMLAttributes } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useFormContext } from "./formContext";

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  options: { label: string; value: string }[];
  isFlex?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormRadio = <T extends FieldValues>(props: FormInputProps<T>) => {
  const { control } = useFormContext<T>();
  const { name, options = [], className, isFlex = true, ...rest } = props;
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { ref, value, onChange }, fieldState }) => {
        return (
          <Fragment>
            <div
              className={cn(
                "items-center",
                isFlex ? "flex gap-4 mt-3.5" : "flex-col space-y-4"
              )}
            >
              {options?.map((option, index) => (
                <label
                  htmlFor={`radio-${index}-${name}`}
                  key={index}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id={`radio-${index}`}
                    className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center border-gray-400",
                      className
                    )}
                    value={option.value}
                    checked={value === option.value}
                    onChange={onChange}
                    ref={ref}
                    {...rest}
                  />
                  <span className="text-gray-700">{option?.label}</span>
                </label>
              ))}
            </div>
            {fieldState?.error && (
              <small className="text-red-500">
                {fieldState?.error?.message}
              </small>
            )}
          </Fragment>
        );
      }}
    />
  );
};
