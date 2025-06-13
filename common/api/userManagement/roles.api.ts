import { paramsProps } from "@/hooks/useTable/types";
import apiConfig from "../../http/apiConfig";

export const RoleQueryKey = "role";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/roles/",
}


//  api config 
export const fetchRoleList = async <R>(params:paramsProps): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: params,
    });
    return res.data;
};

