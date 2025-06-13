"use client";
import { refetchFn, CounselorEntity } from "@/common";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  CounselorDefaultValues,
  counselorSchema,
  CounselorSchemaType,
} from "./counselor.form.model";
import CounselorFormView from "./counselor.form.view";
import {
  counselorCreate,
  counselorEdit,
  CounselorQueryKey,
  counselorUpdate,
} from "@/common/api/applicants/counselor.api";
import { useParams, useRouter } from "next/navigation";

export default function CounselorFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<CounselorSchemaType>>(null);
  const router = useRouter();

  const { id } = useParams<{ id: string }>();
  useQuery<CounselorEntity, Error, CounselorEntity>({
    queryKey: [CounselorQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await counselorEdit(Number(id));
      formRef?.current?.reset(editData);
      return editData;
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<CounselorEntity, Error, CounselorSchemaType>({
    mutationKey: id ? [CounselorQueryKey.Update] : [CounselorQueryKey.Create],
    mutationFn: (value) =>
      id
        ? counselorUpdate<CounselorSchemaType, CounselorEntity>(
            Number(id),
            value
          )
        : counselorCreate<CounselorSchemaType, CounselorEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, CounselorQueryKey.ALL_List);
      router.push("/applicants/counselor");
    },
  });
  const onSubmitHandler = async (value: CounselorSchemaType) => {
    console.log(value);
    if (id) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={CounselorDefaultValues}
      onSubmit={onSubmitHandler}
      schema={counselorSchema}
      ref={formRef}
    >
      <CounselorFormView formRef={formRef} />
    </Form>
  );
}
