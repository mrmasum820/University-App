import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const ClassroomQueryKey = {
  ALL_List: "classroomALLList",
  List: "classroomList",
  Create: "classroomCreate",
  Edit: "classroomEdit",
  Update: "classroomUpdate",
  Delete: "classroomDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/programs/",
  LIST_API: "/programs/list/",
  CREATE_API: "/programs/",
  Edit_API: (id: number) => `/programs/${id}`,
  UPDATE_API: (id: number) => `/programs/${id}`,
  TRASH_API: "/programs/status/",
};

//  api config
export const classroomAllList = async <R>(params: paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params: params,
  });
  return res.data;
};

export const classroomList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LIST_API);
  return res.data;
};

export const classroomCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const classroomEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const classroomUpdate = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const classroomTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
