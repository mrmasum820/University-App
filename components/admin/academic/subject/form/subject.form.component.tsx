"use client";
import { refetchFn, SubjectEntity } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import ClassroomFormView from "./subject.form.view";
import {
  subjectSchema,
  subjectSchemaDefaultValues,
  SubjectSchemaType,
} from "./subject.form.model";
import {
  subjectCreate,
  subjectEdit,
  SubjectQueryKey,
  subjectUpdate,
} from "@/common/api/academic/subject.api";

export default function SubjectFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<SubjectSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<SubjectSchemaType, SubjectEntity>({
    defaultValues: subjectSchemaDefaultValues,
    queryKey: SubjectQueryKey.Edit,
    queryFnApi: subjectEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<SubjectEntity, Error, SubjectSchemaType>({
    mutationKey: isEdit ? [SubjectQueryKey.Update] : [SubjectQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? subjectUpdate<SubjectSchemaType, SubjectEntity>(id, value)
        : subjectCreate<SubjectSchemaType, SubjectEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, SubjectQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: SubjectSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={subjectSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={subjectSchema}
      ref={formRef}
    >
      <ClassroomFormView />
    </Form>
  );
}
