"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useFormContext } from "./formContext";

const JoditEditor =dynamic(()=> import("jodit-react"), {ssr: false, loading: () => <div>Loading...</div>});
type FormTextEditorProps<T extends FieldValues> = {
  name: Path<T>;
  placeholder?: string;
};

export function FormTextEditor<T extends FieldValues>({
  name,
  placeholder,
}: FormTextEditorProps<T>) {
  const { control, form:{watch} } = useFormContext();
  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field:{onChange, value, ref}, fieldState }) => {
        return (<>
          <JoditEditor
            ref={ref}
            value={value}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={onChange} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
            className="w-full border-red-500 border-2"
          />
              {fieldState?.error && (
              <small className="text-red-500">
                {fieldState?.error?.message}
              </small>
            )}
        </>);
      }}
    />
  );
}

FormTextEditor.displayName = "FormTextEditor";
