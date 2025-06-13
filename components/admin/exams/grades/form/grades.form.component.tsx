"use client";
import { GradesEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  gradesSchema,
  gradesSchemaDefaultValues,
  GradesSchemaType,
} from "./grades.form.model";
import {
  gradesCreate,
  gradesEdit,
  GradesQueryKey,
  gradesUpdate,
} from "@/common/api/exams/grades.api";
import GradesFormView from "./grades.form.view";

export default function GradesFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<GradesSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<GradesSchemaType, GradesEntity>({
    defaultValues: gradesSchemaDefaultValues,
    queryKey: GradesQueryKey.Edit,
    queryFnApi: gradesEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<GradesEntity, Error, GradesSchemaType>({
    mutationKey: isEdit ? [GradesQueryKey.Update] : [GradesQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? gradesUpdate<GradesSchemaType, GradesEntity>(id, value)
        : gradesCreate<GradesSchemaType, GradesEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, GradesQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: GradesSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={gradesSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={gradesSchema}
      ref={formRef}
    >
      <GradesFormView />
    </Form>
  );
}
