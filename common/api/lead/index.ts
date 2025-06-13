import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const LeadQueryKey = {
  ALL_List: "leadALLList",
  List: "leadList",
  Create: "leadCreate",
  Edit: "leadEdit",
  Update: "leadUpdate",
  Delete: "leadDelete",
  TRASH: "leadStatus",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/leads/",
  LISTS_API: "/leads/list/",
  CREATE_API: "/leads/",
  Edit_API: (id: number | string) => `/leads/details/${id}`,
  UPDATE_API: (id: number | string) => `/leads/${id}`,
  TRASH_API: "/leads/status/",
};

//  api config
export const leadAllList = async <R>(params: paramsProps): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, { params });
    return res.data;
  };

export const leadList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};

export const leadCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const leadEdit = async (id: number | string) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const leadUpdate = async <T, R>(id: number | string, data: T): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const leadTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
