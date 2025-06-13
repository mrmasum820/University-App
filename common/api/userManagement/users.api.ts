import { paramsProps } from "@/hooks/useTable/types";
import apiConfig from "../../http/apiConfig";

export const UserQueryKey = "users";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/users/",
}


//  api config 
export const fetchUserLists = async <R>(params:paramsProps): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params: params,
    });
    return res.data;
};

