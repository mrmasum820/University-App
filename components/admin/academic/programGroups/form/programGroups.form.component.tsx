"use client";
import { ProgramGroupsEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  programGroupsSchema,
  programGroupsSchemaDefaultValues,
  ProgramGroupsSchemaType,
} from "./programGroups.form.model";
import {
  programGroupsCreate,
  programGroupsEdit,
  ProgramGroupsQueryKey,
  programGroupsUpdate,
} from "@/common/api/academic/programGroups.api";
import ProgramGroupsFormView from "./programGroups.form.view";

export default function ProgramGroupsFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ProgramGroupsSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ProgramGroupsSchemaType, ProgramGroupsEntity>({
    defaultValues: programGroupsSchemaDefaultValues,
    queryKey: ProgramGroupsQueryKey.Edit,
    queryFnApi: programGroupsEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<
    ProgramGroupsEntity,
    Error,
    ProgramGroupsSchemaType
  >({
    mutationKey: isEdit
      ? [ProgramGroupsQueryKey.Update]
      : [ProgramGroupsQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? programGroupsUpdate<ProgramGroupsSchemaType, ProgramGroupsEntity>(
            id,
            value
          )
        : programGroupsCreate<ProgramGroupsSchemaType, ProgramGroupsEntity>(
            value
          ),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ProgramGroupsQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ProgramGroupsSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={programGroupsSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={programGroupsSchema}
      ref={formRef}
    >
      <ProgramGroupsFormView />
    </Form>
  );
}
