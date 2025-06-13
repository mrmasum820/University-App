import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const ServiceCategoryQueryKey = {
  ALL_List: "serviceCategoryALLList",
  List: "serviceCategoryList",
  Create: "serviceCategoryCreate",
  Edit: "serviceCategoryEdit",
  Update: "serviceCategoryUpdate",
  Delete: "serviceCategoryDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/service-categories/",
  LIST_API: (id?: number | string | undefined) =>
    `service-categories/list/${id ? `?parent_id=${id}` : ""}`,
  CREATE_API: "/service-categories/",
  Edit_API: (id: number) => `/service-categories/${id}`,
  UPDATE_API: (id: number) => `/service-categories/${id}`,
  TRASH_API: "/service-categories/status/",
};

//  api config
export const serviceCategoryAllList = async <R>(
  params: paramsProps
): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params:params
  });
  return res.data;
};

export const serviceCategoryList = async (id?: string | number) => {
  const res = await apiConfig.get(ApiEndPoint.LIST_API(id));
  return res.data;
};

export const serviceCategoryCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const serviceCategoryEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const serviceCategoryUpdate = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const serviceCategoryTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
