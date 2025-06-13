import { cn } from "@/uikit/cn";
import { ChangeEvent, Fragment, InputHTMLAttributes, ReactNode } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import InputLabel from "../basic/InputLabel";
import { useFormContext } from "./formContext";

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  labelColor?: string;
  endIcon?: ReactNode;
  onCustomChange?: (val?: string | number) => void;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormTextField = <T extends FieldValues>(
  props: FormInputProps<T>
) => {
  const { control } = useFormContext<T>();
  const { name, endIcon, onCustomChange, className, ...rest } = props;

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <Fragment>
            {props.label && (
              <InputLabel labelColor={props?.labelColor} htmlFor={name}>
                {props?.label}
              </InputLabel>
            )}
            <div className="w-full relative">
              <input
                type="text"
                className={cn(
                  "w-full border  outline-0 px-1 h-[45px] rounded max-h-[45px] border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-400 flex justify-between",
                  className,
                  fieldState?.error && "border-red-500"
                )}
                value={field.value == null ? "" : field.value}
                onChange={(e: ChangeEvent<Element>) => {
                  field.onChange(e);
                  onCustomChange?.((e.target as HTMLInputElement).value);
                  // rest.onChange(e.target.value)
                }}
                ref={field.ref}
                onBlur={field.onBlur}
                id={name}
                {...rest}
              />
              {endIcon && (
                <div className="h-7 max-h-7 overflow-hidden pr-2 absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                  {endIcon}
                </div>
              )}
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
