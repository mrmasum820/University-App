"use client";
import { ProgramsEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  programsSchema,
  programsSchemaDefaultValues,
  ProgramsSchemaType,
} from "./program.form.model";
import {
  programsCreate,
  programsEdit,
  ProgramsQueryKey,
  programsUpdate,
} from "@/common/api";
import ProgramsFormView from "./program.form.view";

export default function ProgramsFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ProgramsSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ProgramsSchemaType, ProgramsEntity>({
    defaultValues: programsSchemaDefaultValues,
    queryKey: ProgramsQueryKey.Edit,
    queryFnApi: programsEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<ProgramsEntity, Error, ProgramsSchemaType>({
    mutationKey: isEdit ? [ProgramsQueryKey.Update] : [ProgramsQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? programsUpdate<ProgramsSchemaType, ProgramsEntity>(id, value)
        : programsCreate<ProgramsSchemaType, ProgramsEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ProgramsQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ProgramsSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={programsSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={programsSchema}
      ref={formRef}
    >
      <ProgramsFormView />
    </Form>
  );
}
