import { ReactNode } from "react";
import {
  ArrayPath,
  FieldValues,
  useFieldArray,
  UseFieldArrayReturn,
} from "react-hook-form";
import { useFormContext } from "./formContext";

type FormAraayProps<TFormValues extends FieldValues> = {
  children: (
    fileds: UseFieldArrayReturn<TFormValues, ArrayPath<TFormValues>>
  ) => ReactNode;
  name: ArrayPath<TFormValues>;
};

export function FormArray<TFormValues extends FieldValues>({
  name,
  children,
}: FormAraayProps<TFormValues>) {
  const { control } = useFormContext<TFormValues>();
  const filedArray = useFieldArray({ control, name });
  return children(filedArray);
}
