import { useQuery } from "@tanstack/react-query";
import { ApiDefaultType } from "../globalTypes";

interface TGetDropdownServer<T> {
  queryKey: string;
  queryFnApi: <T>(val?:number|string) => Promise<ApiDefaultType<T[]>>;
  keyName?: { label: string; value: string  };
}

export function getDropdownServer<T>({
  queryKey,
  queryFnApi,
  keyName,
}: TGetDropdownServer<T>) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await queryFnApi();
      const modifyData = res?.items?.map((val: Record<string, any>) => {
        return {
          label: keyName ? val[keyName.label] : (val as any).name,
          value: keyName ? val[keyName.value] : (val as any).id,
          items:val
        };
      });

      return modifyData || [];
    },
  });
}
