"use client"
import { useEditStore } from "@/common/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface PageProps<T, R extends Partial<T>> {
  queryKey: string;
  queryFnApi: (id: number) => Promise<R>;
  defaultValues: T;
  resetValues: (value: Partial<T>) => void;
}

function filterByDataType<T extends object>(
  dataObj: Record<string, any> | undefined | null,
  ref: T
): Partial<T> {
  if (!dataObj) return {};
  const keys = Object.keys(ref);
  const result: Partial<T> = {};
  for (const key of keys) {
    if (key in dataObj) {
      result[key as keyof T] = dataObj[key];
    }
  }
  return result;
}

export const useEdit = <T extends object, R extends Partial<T>>({
  queryKey,
  queryFnApi,
  defaultValues,
  resetValues,
}: PageProps<T, R>) => {
  const { id, isEdit } = useEditStore();
  const { data } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => queryFnApi(id),
    enabled: !!id,
  });
  const filteredData = filterByDataType<T>(data, defaultValues);
  // console.log("filteredData", filteredData);

  useEffect(() => {
    if (!isEdit) {
      resetValues(defaultValues);
    } else {
      resetValues(filteredData);
    }
  }, [isEdit, filteredData]);
  return { id, isEdit, filteredData };
};
