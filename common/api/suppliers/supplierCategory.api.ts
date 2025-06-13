import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const SupplierCategoryQueryKey = {
  ALL_List: "supplierCategoryALLList",
  List: "supplierCategoryList",
  Create: "supplierCategoryCreate",
  Edit: "supplierCategoryEdit",
  Update: "supplierCategoryUpdate",
  Delete: "supplierCategoryDelete",
};
// api endpoint
const ApiEndPoint = {
  ALL_List_API: "/supplier-categories/",
  LISTS_API: "/supplier-categories/list/",
  CREATE_API: "/supplier-categories/",
  Edit_API: (id: number) => `/supplier-categories/${id}`,
  UPDATE_API: (id: number) => `/supplier-categories/${id}`,
  TRASH_API: "/supplier-categories/status/",
};

//  api config
export const supplierCategoryAllList = async <R>(params: paramsProps): Promise<R> => {
  console.log(params);
  
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_List_API, {
    params:params
  });
  return res.data;
};

export const supplierCategoryList = async <R>(search?: string): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API, {
    params: {
      search: search,
    },
  });
  return res.data;
};

export const supplierCategoryCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const supplierCategoryEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const supplierCategoryUpdate = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const supplierCategoryTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
