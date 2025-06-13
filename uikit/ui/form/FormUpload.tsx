"use client";
import { cn } from "@/uikit/cn";
import { Fragment, InputHTMLAttributes, useRef, useState } from "react";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { CgTrashEmpty } from "react-icons/cg";
import InputLabel from "../basic/InputLabel";
import { useFormContext } from "./formContext";

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  labelColor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormUpload = <T extends FieldValues>(props: FormInputProps<T>) => {
  const {
    control,
    form: { setValue, watch },
  } = useFormContext<T>();
  const { name, ...rest } = props;
  const [base64Value, setBase64Value] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClickClear = () => {
    setBase64Value("");
    setValue(name, "" as PathValue<T, Path<T> & (string | undefined)>);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <Fragment>
            {props.label && (
              <InputLabel labelColor={props?.labelColor}>
                {props?.label}
              </InputLabel>
            )}
            <div className="flex items-center justify-center w-full">
              <input
                ref={(el) => {
                  field?.ref(el);
                  inputRef.current = el;
                }}
                id={name}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      if (reader.result) {
                        field.onChange(reader.result.toString());
                        setBase64Value(reader.result.toString());
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                {...rest}
              />
              <div
                className={cn(
                  base64Value ? "flex w-full flex-row-reverse gap-4" : "w-full"
                )}
              >
                <label
                  htmlFor={name}
                  className="flex flex-col items-center justify-center w-full h-32 bg-gray-100 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">
                    <span className="font-semibold text-blue-600 hover:underline">
                      {rest?.placeholder
                        ? rest?.placeholder
                        : "Click to upload"}
                    </span>
                  </p>
                </label>
                <div id="fileName" className="relative w-52">
                  {base64Value && (
                    <img
                      src={base64Value}
                      alt="upload image"
                      className="h-32 w-52 rounded-lg"
                    />
                  )}
                  {base64Value && (
                    <>
                      <div className="absolute top-0 left-0 w-full rounded-lg h-32 transition delay-100 opacity-0 hover:opacity-100 hover:bg-gray-950/50">
                        <div className="flex justify-center items-center h-full">
                          <button type="button" onClick={handleClickClear}>
                            <CgTrashEmpty className="text-red-500 bg-white rounded-full p-2 w-10 h-10 cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
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
