import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const SuppliersQueryKey = {
  ALL_List: "supplierALLList",
  List: "supplierList",
  Create: "supplierCreate",
  Edit: "supplierEdit",
  Update: "supplierUpdate",
  Delete: "supplierDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/suppliers/",
  LISTS_API: "/suppliers/list/",
  CREATE_API: "/suppliers/",
  Edit_API: (id: number | string) => `/suppliers/${id}`,
  UPDATE_API: (id: number | string) => `/suppliers/${id}`,
  TRASH_API: "/suppliers/status/",
};

//  api config
export const supplierAllList = async <R>(params: paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params:params
  });
  return res.data;
};

export const suppliersList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};

export const suppliersCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const suppliersEdit = async (id: number | string) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const suppliersUpdate = async <T, R>(
  id: number | string,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const suppliersTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
