import { paramsProps } from "@/hooks/useTable/types";
import apiConfig from "../../http/apiConfig";

export const PermissionQueryKey = "permission";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/permissions/",
}


//  api config 
export const fetchPermissionList = async <R>(params:paramsProps): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: params,
    });
    return res.data;
};

