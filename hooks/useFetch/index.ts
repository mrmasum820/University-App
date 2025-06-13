import { ApiDefaultType } from "@/common/globalTypes";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { paramsProps } from "../useTable/types";

interface pageProps {
  queryKey: { mainKey?: string; paramsKey: paramsProps };
  queryFnApi: <R>(params: paramsProps) => Promise<R>;
  placeholderData?: boolean;
  params?: paramsProps;
  staleTime?: number;
}

const MINUTE = 1000 * 60;

export const useFetchList = <T>({
  queryKey,
  params,
  queryFnApi,
  staleTime,
}: pageProps) => {
  return useQuery<ApiDefaultType<T[]>>({
    queryKey: Object?.values(queryKey),
    queryFn: () =>
      queryFnApi<ApiDefaultType<T[]>>(params ?? ({} as paramsProps)),
    staleTime: staleTime || 2 * MINUTE,
    placeholderData: keepPreviousData,
  });
};
