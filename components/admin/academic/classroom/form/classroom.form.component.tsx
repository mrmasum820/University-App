"use client";
import { ClassroomEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  classroomSchema,
  classroomSchemaDefaultValues,
  ClassroomSchemaType,
} from "./classroom.form.model";
import {
  classroomCreate,
  classroomEdit,
  ClassroomQueryKey,
  classroomUpdate,
} from "@/common/api/academic/classroom.api";
import ClassroomFormView from "./classroom.form.view";

export default function ClassroomFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ClassroomSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ClassroomSchemaType, ClassroomEntity>({
    defaultValues: classroomSchemaDefaultValues,
    queryKey: ClassroomQueryKey.Edit,
    queryFnApi: classroomEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<ClassroomEntity, Error, ClassroomSchemaType>({
    mutationKey: isEdit
      ? [ClassroomQueryKey.Update]
      : [ClassroomQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? classroomUpdate<ClassroomSchemaType, ClassroomEntity>(id, value)
        : classroomCreate<ClassroomSchemaType, ClassroomEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ClassroomQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ClassroomSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={classroomSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={classroomSchema}
      ref={formRef}
    >
      <ClassroomFormView />
    </Form>
  );
}
