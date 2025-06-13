import { Ref } from "react";
import { Control, FieldValues, FormState, Path, SubmitHandler, UseFormReturn } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormRefProps<TFormValues extends FieldValues> = {
    control: Control<TFormValues>;
    formState: FormState<TFormValues>;
    getValues: () => TFormValues;
    setValue: (name: Path<TFormValues>, value: TFormValues[Path<TFormValues>]) => void;
    reset: (values?: Partial<TFormValues> | undefined) => void;
    form: UseFormReturn<TFormValues>;
}

export type FormProps<TSchema extends ZodType> = {
    schema: TSchema;
    defaultValues: Partial<z.infer<TSchema>>;
    onSubmit: SubmitHandler<z.infer<TSchema>>;
    mode?: "onChange" | "onSubmit" | "onBlur" | "onTouched" | "all" | undefined;
    children: React.ReactNode;
    ref?: Ref<FormRefProps<z.infer<TSchema>>>
    className?: string;
}

export default FormRefProps;