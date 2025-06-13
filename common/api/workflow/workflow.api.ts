import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const WorkflowQueryKey = {
  ALL_List: "WorkflowALLList",
  LIST: "WorkflowList",
  Create: "WorkflowCreate",
  Edit: "WorkflowEdit",
  Update: "WorkflowUpdate",
  Delete: "WorkflowDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/workflows/",
  LISTS_API: "/workflows/list/",
  CREATE_API: "/workflows/",
  Edit_API: (id: number) => `/workflows/${id}`,
  UPDATE_API: (id: number) => `/workflows/${id}`,
  TRASH_API: "/workflows/update-status",
};

//  api config
export const workflowsAllList = async <R>(params: paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, { params });
  return res.data;
};

export const workflowsList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};

export const workflowsCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const workflowsEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const workflowsUpdate = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const workflowsTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.post<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
