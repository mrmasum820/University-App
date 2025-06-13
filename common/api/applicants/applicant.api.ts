import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const ApplicantQueryKey = {
  ALL_List: "applicantALLList",
  List: "applicantList",
  Create: "applicantCreate",
  Edit: "applicantEdit",
  Update: "applicantUpdate",
  Delete: "applicantDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/applicants/",
  LIST_API: "/applicants/list/",
  CREATE_API: "/applicants/",
  Edit_API: (id: number) => `/applicants/details/${id}`,
  UPDATE_API: (id: number) => `/applicants/${id}`,
  TRASH_API: "/applicants/status/",
};

//  api config
export const applicantAllList = async <R>(params:paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params:params
  });
  return res.data;
};

export const applicantList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LIST_API);
  return res.data;
};

export const applicantCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const applicantEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const applicantUpdate = async <T, R>(id: number, data: T): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const applicantTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
