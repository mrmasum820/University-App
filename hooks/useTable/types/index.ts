import { JSX } from "react";

export const pageSize = 5;
export type paramsProps = { [key: string]: string | number };
export type TableHookProps<T> = {
  tableHeader: any;
  dataSource?: T[];
  tableFilter: ({ table, tableData }: any) => JSX.Element;
  fetchList: {
    queryKey: string;
    params?: paramsProps;
    queryFnApi: <R>(params: paramsProps) => Promise<R>;
    placeholderData?: boolean;
    staleTime?: number;
  };
};
