import { LoginResponse } from "@/common";
import { fetchAuthLogin } from "@/common/api";
import { LoginSchemaType } from "@/components/auth/login/login.model";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type IUseFormRequestProps = {
  onSuccess?: (val: any) => void | undefined;
  onError?: (val: any) => void | undefined;
};

export const useFormRequest = ({
  onSuccess,
  onError,
}: IUseFormRequestProps) => {
  const {
    mutateAsync: FormStore,
    error,
    isPending,
  } = useMutation<LoginResponse, Error, LoginSchemaType>({
    mutationKey: ["login"],
    mutationFn: (value) =>
      fetchAuthLogin<LoginSchemaType, LoginResponse>(value),
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (errors) => {
      if (axios.isAxiosError(errors) && onError) {
        onError(errors.response?.data);
      }
    },
  });

  const err = axios.isAxiosError(error) && error.response?.data;
  // console.log("isSuccess", isPending);

  return {
    FormStore,
    error,
    isPending,
  };
};
