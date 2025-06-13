import apiConfig from "@/common/http/apiConfig";

export const AgentsCategoryQueryKey = {
  ALL_List: "agentsCategoryALLList",
  List: "agentsCategoryList",
  Create: "agentsCategoryCreate",
  Edit: "agentsCategoryEdit",
  Update: "agentsCategoryUpdate",
  Delete: "agentsCategoryDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/agent-categories/",
  LISTS_API: "/agent-categories/list/",
  CREATE_API: "/agent-categories/",
  Edit_API: (id: number | string) => `/agent-categories/${id}`,
  UPDATE_API: (id: number | string) => `/agent-categories/${id}`,
  TRASH_API: "/agent-categories/status",
};

//  api config
export const agentsCategoryAllList = async <R>(
  page: number,
  perPage: number
): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params: {
      page: page,
      per_page: perPage,
    },
  });
  return res.data;
};

export const agentsCategoryList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};

export const agentsCategoryCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const agentsCategoryEdit = async (id: number | string) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const agentsCategoryUpdate = async <T, R>(
  id: number | string,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const agentsCategoryTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
