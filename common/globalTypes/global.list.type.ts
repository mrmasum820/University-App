import { type FormRefProps } from "@/uikit/ui";
import { Table } from "@tanstack/react-table";
import { ElementType, RefObject } from "react";
import { FieldValues } from "react-hook-form";
import { ApiDefaultType } from "./api.list.type";

export type TBasicListViewProps = {
  tableComponent: ElementType<any, any>;
};

export type TBasicFormViewProps<T extends FieldValues> = {
  onSubmit?: (value: T) => void;
  formRef?: RefObject<FormRefProps<T> | null>;
};

export type TBasicDefaultProps<T extends FieldValues> = TBasicFormViewProps<T>;
export type TBasicViewProps<T extends FieldValues> = TBasicFormViewProps<T>;
export type TBasicComponentProps<T extends FieldValues> =
  TBasicFormViewProps<T>;
export type TBasicFormComponentProps<T extends FieldValues> =
  TBasicFormViewProps<T>;

export type TableFilterProps<T> = {
  table: Table<T>;
  tableData?: ApiDefaultType<T>;
};

export type TrashDropdownType = {
  status: string;
};
