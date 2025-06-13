import { createContext, useContext } from "react";
import { Control, FieldValues, UseFormReturn } from "react-hook-form";

export type FormContextType<TFormValues extends FieldValues = any> = {
  control: Control<TFormValues>;
  form: UseFormReturn<TFormValues>;
};

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = <TFormValues extends FieldValues = any>() => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useUiFormContext must be used within a UiForm component");
  }
  return {
    control: context.control as Control<TFormValues>,
    form: context.form as UseFormReturn<TFormValues>,
  };
};
