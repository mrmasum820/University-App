"use client";
import { useFormRequest } from "@/hooks/useFormRequest";
import { Form, FormRefProps, toast } from "@/uikit/ui";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import {
  loginDefaultValues,
  loginSchema,
  type LoginSchemaType,
} from "./login.model";
import LoginView from "./login.view";

export default function LoginComponent() {

  const navigate = useRouter();
  // const mutation = useMutation<LoginResponse, Error, LoginSchemaType>({
  //   mutationFn: (value) => fetchAuthLogin<LoginSchemaType, LoginResponse>(value),
  //   onSuccess: (data) => {
  //     localStorage.setItem("access_token", data.access_token);
  //     navigate.push("/dashboard");
  //   },
  //   onError:(errors) => {
  //     localStorage.removeItem("access_token");
  //     if(axios.isAxiosError(errors)){
  //       console.log(errors?.response?.data.detail);
  //     }
  //   }
  // });

  const {FormStore, isPending, error} = useFormRequest({
    onSuccess:(data) => {
      localStorage.setItem("access_token", data.access_token);
      toast.success("Login Success");
      navigate.push("/dashboard");
    }, 
    onError:(err)=>{
      if (err?.detail) {
        toast.error(err?.detail);
        localStorage.removeItem("access_token");
      }
    }
  })

  const formRef = useRef<FormRefProps<LoginSchemaType>>(null);

  const onSubmitHandler = async (value: LoginSchemaType) => {
    FormStore(value);
  };

  

  return (
    <Form
      schema={loginSchema}
      defaultValues={loginDefaultValues}
      onSubmit={onSubmitHandler}
      ref={formRef}
    >
      <LoginView formRef={formRef} isPending={isPending} error={error?.message} />
    </Form>
  );
}
