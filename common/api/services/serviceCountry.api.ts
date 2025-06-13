import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const SearviceCountryQueryKey = {
  ALLList: "serviceCountryALLList",
  List: "serviceCountryList",
  Create: "serviceCountryCreate",
  Edit: "serviceCountryEdit",
  Update: "serviceCountryUpdate",
  Delete: "serviceCountryDelete",
  TRASH: "serviceCountryTarsh",
};

// api endpoint
const ApiEndPoint = {
  ALL_LIST_API: "/service-countries/",
  LISTS_API: "/service-countries/list/",
  CREATE_API: "/service-countries/",
  Edit_API: (id: number) => `/service-countries/${id}`,
  UPDATE_API: (id: number) => `/service-countries/${id}`,
  TRASH_API: "/service-countries/status/",
};

//  api config
export const fetchSearviceCountryAllList = async <R>(
   params: paramsProps
 
): Promise<R> => {
  const res = await apiConfig.get<R>(ApiEndPoint.ALL_LIST_API, {
    params: params,
  });
  return res.data;
};

export const fetchSearviceCountryCreate = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>(ApiEndPoint.CREATE_API, data);
  return res.data;
};

export const fetchSearviceCountrySingle = async (id: number) => {
  const res = await apiConfig.get(ApiEndPoint.Edit_API(id));
  return res.data;
};

export const fetchSearviceCountryEdit = async <T, R>(
  id: number,
  data: T
): Promise<R> => {
  const res = await apiConfig.put<R>(ApiEndPoint.UPDATE_API(id), data);
  return res.data;
};

export const serviceCountryTrash = async <T>(data: T): Promise<T> => {
  const res = await apiConfig.patch<T>(ApiEndPoint.TRASH_API, data);
  return res.data;
};

export const serviceCountryList = async () => {
  const res = await apiConfig.get(ApiEndPoint.LISTS_API);
  return res.data;
};