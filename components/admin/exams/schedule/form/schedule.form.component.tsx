"use client";
import { ExamScheduleEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  examScheduleSchema,
  examScheduleSchemaDefaultValues,
  ExamScheduleSchemaType,
} from "./schedule.form.model";
import {
  examScheduleCreate,
  examScheduleEdit,
  ExamScheduleQueryKey,
  examScheduleUpdate,
} from "@/common/api/exams/schedule.api";
import ScheduleFormView from "./schedule.form.view";

export default function ScheduleFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ExamScheduleSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ExamScheduleSchemaType, ExamScheduleEntity>({
    defaultValues: examScheduleSchemaDefaultValues,
    queryKey: ExamScheduleQueryKey.Edit,
    queryFnApi: examScheduleEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<
    ExamScheduleEntity,
    Error,
    ExamScheduleSchemaType
  >({
    mutationKey: isEdit
      ? [ExamScheduleQueryKey.Update]
      : [ExamScheduleQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? examScheduleUpdate<ExamScheduleSchemaType, ExamScheduleEntity>(
            id,
            value
          )
        : examScheduleCreate<ExamScheduleSchemaType, ExamScheduleEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ExamScheduleQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ExamScheduleSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={examScheduleSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={examScheduleSchema}
      ref={formRef}
    >
      <ScheduleFormView />
    </Form>
  );
}
