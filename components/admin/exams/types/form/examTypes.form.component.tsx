"use client";
import { ExamsEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  examTypesSchema,
  examTypesSchemaDefaultValues,
  ExamTypesSchemaType,
} from "./examTypes.form.model";
import {
  examTypesCreate,
  examTypesEdit,
  ExamTypesQueryKey,
  examTypesUpdate,
} from "@/common/api/exams/types.api";
import ExamTypesFormView from "./examTypes.form.view";

export default function ExamTypesFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ExamTypesSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ExamTypesSchemaType, ExamsEntity>({
    defaultValues: examTypesSchemaDefaultValues,
    queryKey: ExamTypesQueryKey.Edit,
    queryFnApi: examTypesEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<ExamsEntity, Error, ExamTypesSchemaType>({
    mutationKey: isEdit
      ? [ExamTypesQueryKey.Update]
      : [ExamTypesQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? examTypesUpdate<ExamTypesSchemaType, ExamsEntity>(id, value)
        : examTypesCreate<ExamTypesSchemaType, ExamsEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ExamTypesQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ExamTypesSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={examTypesSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={examTypesSchema}
      ref={formRef}
    >
      <ExamTypesFormView />
    </Form>
  );
}
