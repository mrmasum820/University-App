import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const ServiceFeesTypeQueryKey = {
  ALL_List: "serviceFeesTypeALLList",
  List: "serviceFeesTypeList",
  Create: "serviceFeesTypeCreate",
  Edit: "serviceFeesTypeEdit",
  Update: "serviceFeesTypeUpdate",
  Delete: "serviceFeesTypeDelete",
};
// api endpoint

const ApiEndPoint = {
  ALL_LIST_API: "/service-fee-types/",
  LISTS_API: "/service-fee-types/list/",
  CREATE_API: "/service-fee-types/",
  Edit_API: (id: number) => `/service-fee-types/${id}`,
  UPDATE_API: (id: number) => `/service-fee-types/${id}`,
  TRASH_API: "/service-fee-types/status",
};

//  api config
export const serviceFeesAllList = async <R>(params:paramsProps): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params:params,
  });
  return res.data;
};

export const serviceFeesList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};

export const serviceFeesCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const serviceFeesEdit = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const serviceFeesUpdate = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const serviceFeesTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};
