"use client";
import { refetchFn } from "@/common";

import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  sourceDefaultValues,
  sourceSchema,
  SourceSchemaType,
} from "./source.form.model";
import { SourceEntity } from "@/common/entity/settings/source.entity";
import SourceFormView from "./source.form.view";
import {
  sourceCreate,
  sourceEdit,
  SourceQueryKey,
  sourceUpdate,
} from "@/common/api";

export default function CounselorFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<SourceSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<SourceSchemaType, SourceEntity>({
    defaultValues: sourceDefaultValues,
    queryKey: SourceQueryKey.Edit,
    queryFnApi: sourceEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<SourceEntity, Error, SourceSchemaType>({
    mutationKey: isEdit ? [SourceQueryKey.Update] : [SourceQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? sourceUpdate<SourceSchemaType, SourceEntity>(id, value)
        : sourceCreate<SourceSchemaType, SourceEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, SourceQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: SourceSchemaType) => {
    console.log(value);
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={sourceDefaultValues}
      onSubmit={onSubmitHandler}
      schema={sourceSchema}
      ref={formRef}
    >
      <SourceFormView formRef={formRef} />
    </Form>
  );
}
