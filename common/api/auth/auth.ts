import apiConfig from "@/common/http/apiConfig";

export const fetchAuthLogin = async <T, R>(data: T): Promise<R> => {
  const res = await apiConfig.post<R>("/auth/login", data);
  return res.data;
};

export const currentUser = async () => {
  try {
    const res = await apiConfig.get("/auth/me");
    return res.data;
  } catch (err: any) {
    if (err.response?.status === 401) {
      localStorage.removeItem("access_token");
      throw new Error("Session expired");
    }
    throw err;
  }
};
