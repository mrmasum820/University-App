import { useQuery } from "@tanstack/react-query";
import { currentUser } from "../api";


export const getCurrentUser = () => {
  const { data: currentUserData } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      return await currentUser();
    },
  })
  return currentUserData
};