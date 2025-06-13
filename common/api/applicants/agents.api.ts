import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const AgentsQueryKey = {
  ALL_List: "agentsALLList",
  List: "agentsList",
  Create: "agentsCreate",
  Edit: "agentsEdit",
  Update: "agentsUpdate",
  Delete: "agentsDelete",
};
// api endpoint

export const ApiEndPoint = {
  ALL_LIST_API: "/agents/",
  LISTS_API: "/agents/list/",
  CREATE_API: "/agents/",
  Edit_API: (id: number) => `/agents/${id}`,
  UPDATE_API: (id: number) => `/agents/${id}`,
  TRASH_API: "/agents/status/",
};

//  api config
export const agentsAllList = async <R>(params: paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params: params,
  });
  return res.data;
};

export const agentsList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};

export const agentsCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const agentsEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const agentsUpdate = async <T, R>(id: number, data: T): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const agentsTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
