"use client";
import { InstituteEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  instituteSchema,
  instituteSchemaDefaultValues,
  InstituteSchemaType,
} from "./institute.form.model";
import {
  instituteCreate,
  instituteEdit,
  InstituteQueryKey,
  instituteUpdate,
} from "@/common/api/institute/institute.api";
import InstituteFormView from "./institute.form.view";

export default function ProgramsFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<InstituteSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<InstituteSchemaType, InstituteEntity>({
    defaultValues: instituteSchemaDefaultValues,
    queryKey: InstituteQueryKey.Edit,
    queryFnApi: instituteEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<InstituteEntity, Error, InstituteSchemaType>({
    mutationKey: isEdit
      ? [InstituteQueryKey.Update]
      : [InstituteQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? instituteUpdate<InstituteSchemaType, InstituteEntity>(id, value)
        : instituteCreate<InstituteSchemaType, InstituteEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, InstituteQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: InstituteSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={instituteSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={instituteSchema}
      ref={formRef}
    >
      <InstituteFormView formRef={formRef} />
    </Form>
  );
}
