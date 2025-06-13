import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const ServiceQueryKey = {
  ALL_List: "serviceALLList",
  List: "serviceList",
  Create: "serviceCreate",
  Edit: "serviceEdit",
  Update: "serviceUpdate",
  Delete: "serviceDelete",
  TRASH: "serviceStatus",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/services/",
  LISTS_API: "/services/list/",
  CREATE_API: "/services/",
  Edit_API: (id: number | string) => `/services/${id}`,
  UPDATE_API: (id: number | string) => `/services/${id}`,
  TRASH_API: "/services/status/",
};

//  api config
export const serviceAllList = async <R>(
    params: paramsProps
  
): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params: params,
  });
  return res.data;
};

export const serviceList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};

export const serviceCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const serviceEdit = async (id: number | string) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const serviceUpdate = async <T, R>(id: number | string, data: T): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const serviceTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
