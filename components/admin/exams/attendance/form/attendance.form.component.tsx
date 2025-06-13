"use client";
import { ExamAttendanceEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  examAttendanceSchema,
  examAttendanceSchemaDefaultValues,
  ExamAttendanceSchemaType,
} from "./attendance.form.model";
import {
  examAttendanceCreate,
  examAttendanceEdit,
  ExamAttendanceQueryKey,
  examAttendanceUpdate,
} from "@/common/api/exams/attendance.api";
import AttendanceFormView from "./attendance.form.view";

export default function AttendanceFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ExamAttendanceSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ExamAttendanceSchemaType, ExamAttendanceEntity>({
    defaultValues: examAttendanceSchemaDefaultValues,
    queryKey: ExamAttendanceQueryKey.Edit,
    queryFnApi: examAttendanceEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<
    ExamAttendanceEntity,
    Error,
    ExamAttendanceSchemaType
  >({
    mutationKey: isEdit
      ? [ExamAttendanceQueryKey.Update]
      : [ExamAttendanceQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? examAttendanceUpdate<ExamAttendanceSchemaType, ExamAttendanceEntity>(
            id,
            value
          )
        : examAttendanceCreate<ExamAttendanceSchemaType, ExamAttendanceEntity>(
            value
          ),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ExamAttendanceQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ExamAttendanceSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={examAttendanceSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={examAttendanceSchema}
      ref={formRef}
    >
      <AttendanceFormView />
    </Form>
  );
}
