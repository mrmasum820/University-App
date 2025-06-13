"use client";
import { EnrollmentEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  enrollmentSchema,
  enrollmentSchemaDefaultValues,
  EnrollmentSchemaType,
} from "./enrollment.form.model";
import {
  enrollmentCreate,
  enrollmentEdit,
  EnrollmentQueryKey,
  enrollmentUpdate,
} from "@/common/api/academic/enrollment.api";
import EnrollmentFormView from "./enrollment.form.view";

export default function EnrollmentFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<EnrollmentSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<EnrollmentSchemaType, EnrollmentEntity>({
    defaultValues: enrollmentSchemaDefaultValues,
    queryKey: EnrollmentQueryKey.Edit,
    queryFnApi: enrollmentEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<EnrollmentEntity, Error, EnrollmentSchemaType>({
    mutationKey: isEdit
      ? [EnrollmentQueryKey.Update]
      : [EnrollmentQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? enrollmentUpdate<EnrollmentSchemaType, EnrollmentEntity>(id, value)
        : enrollmentCreate<EnrollmentSchemaType, EnrollmentEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, EnrollmentQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: EnrollmentSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={enrollmentSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={enrollmentSchema}
      ref={formRef}
    >
      <EnrollmentFormView />
    </Form>
  );
}
