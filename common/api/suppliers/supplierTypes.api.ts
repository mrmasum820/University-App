import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const SupplierTypesQueryKey = {
  List: "supplierTypesList",
  Create: "supplierTypesCreate",
  Edit: "supplierTypesEdit",
  Update: "supplierTypesUpdate",
  Delete: "supplierTypesDelete",
};
// api endpoint
const ApiEndPoint = {
  LISTS_API: "/supplier-types/",
  CREATE_API: "/supplier-types/",
  Edit_API: (id: number) => `/supplier-types/${id}`,
  UPDATE_API: (id: number) => `/supplier-types/${id}`,
  TRASH_API: "/supplier-types/status",
};

//  api config
export const fetchSupplierTypesList = async <R>(params:paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API, {
    params: params
  });
  return res.data;
};

export const fetchSupplierTypesCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const fetchSupplierTypesSingle = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const fetchSupplierTypesEdit = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const supplierTypesTrash = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.patch<R>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
