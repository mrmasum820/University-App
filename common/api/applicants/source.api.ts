import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const SourceQueryKey = {
  ALL_List: "sourceALLList",
  List: "sourceList",
  Create: "sourceCreate",
  Edit: "sourceEdit",
  Update: "sourceUpdate",
  Delete: "sourceDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/lead-sources/",
  LIST_API: "/lead-sources/list/",
  CREATE_API: "/lead-sources/",
  Edit_API: (id: number) => `/lead-sources/${id}`,
  UPDATE_API: (id: number) => `/lead-sources/${id}`,
  TRASH_API: "/lead-sources/status/",
};

//  api config
export const sourceAllList = async <R>(params:paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params:params
  });
  return res.data;
};

export const sourceList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LIST_API);
  return res.data;
};

export const sourceCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const sourceEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const sourceUpdate = async <T, R>(id: number, data: T): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const sourceTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
