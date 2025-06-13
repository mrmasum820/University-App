import apiConfig from "@/common/http/apiConfig";
import { paramsProps } from "@/hooks/useTable/types";

export const DepartmentQueryKey = "department";

// api endpoint
const ApiEndPoint = {
    LISTS_API: "/departments/",
} 
//  api config 
export const fetchDepartmentLists = async <R>(params:paramsProps): Promise<R> => {
    const res = await apiConfig.get<R>(ApiEndPoint.LISTS_API,{
        params:params,
    });
    return res.data;
};

