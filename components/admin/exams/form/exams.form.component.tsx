"use client";
import { ExamsEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  examsSchema,
  examsSchemaDefaultValues,
  ExamsSchemaType,
} from "./exams.form.model";
import {
  examsCreate,
  examsEdit,
  ExamsQueryKey,
  examsUpdate,
} from "@/common/api/exams/exams.api";
import ExamsFormView from "./exams.form.view";

export default function ExamsFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ExamsSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ExamsSchemaType, ExamsEntity>({
    defaultValues: examsSchemaDefaultValues,
    queryKey: ExamsQueryKey.Edit,
    queryFnApi: examsEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<ExamsEntity, Error, ExamsSchemaType>({
    mutationKey: isEdit ? [ExamsQueryKey.Update] : [ExamsQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? examsUpdate<ExamsSchemaType, ExamsEntity>(id, value)
        : examsCreate<ExamsSchemaType, ExamsEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ExamsQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ExamsSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={examsSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={examsSchema}
      ref={formRef}
    >
      <ExamsFormView />
    </Form>
  );
}
