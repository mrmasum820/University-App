import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const CounselorQueryKey = {
  ALL_List: "counselorALLList",
  List: "counselorList",
  Create: "counselorCreate",
  Edit: "counselorEdit",
  Update: "counselorUpdate",
  Delete: "counselorDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/counselors/",
  LIST_API: "/counselors/list/",
  CREATE_API: "/counselors/",
  Edit_API: (id: number) => `/counselors/${id}`,
  UPDATE_API: (id: number) => `/counselors/${id}`,
  TRASH_API: "/counselors/status/",
};

//  api config
export const counselorAllList = async <R>(
   params: paramsProps
 
): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params: params,
  });
  return res.data;
};

export const counselorList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LIST_API);
  return res.data;
};

export const counselorCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const counselorEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const counselorUpdate = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const counselorTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
