"use client";
import { LecturerEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  lecturerSchema,
  lecturerSchemaDefaultValues,
  LecturerSchemaType,
} from "./lecturer.form.model";
import {
  lecturerCreate,
  lecturerEdit,
  LecturerQueryKey,
  lecturerUpdate,
} from "@/common/api/academic/lecturer.api";
import LecturerFormView from "./lecturer.form.view";

export default function LecturerFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<LecturerSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<LecturerSchemaType, LecturerEntity>({
    defaultValues: lecturerSchemaDefaultValues,
    queryKey: LecturerQueryKey.Edit,
    queryFnApi: lecturerEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<LecturerEntity, Error, LecturerSchemaType>({
    mutationKey: isEdit ? [LecturerQueryKey.Update] : [LecturerQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? lecturerUpdate<LecturerSchemaType, LecturerEntity>(id, value)
        : lecturerCreate<LecturerSchemaType, LecturerEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, LecturerQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: LecturerSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={lecturerSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={lecturerSchema}
      ref={formRef}
    >
      <LecturerFormView />
    </Form>
  );
}
