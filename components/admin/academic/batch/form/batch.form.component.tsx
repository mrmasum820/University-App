"use client";
import { BatchEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  batchSchema,
  batchSchemaDefaultValues,
  BatchSchemaType,
} from "./batch.form.model";
import {
  batchCreate,
  batchEdit,
  BatchQueryKey,
  batchUpdate,
} from "@/common/api/academic/batch.api";
import BatchFormView from "./batch.form.view";

export default function BatchFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<BatchSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<BatchSchemaType, BatchEntity>({
    defaultValues: batchSchemaDefaultValues,
    queryKey: BatchQueryKey.Edit,
    queryFnApi: batchEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<BatchEntity, Error, BatchSchemaType>({
    mutationKey: isEdit ? [BatchQueryKey.Update] : [BatchQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? batchUpdate<BatchSchemaType, BatchEntity>(id, value)
        : batchCreate<BatchSchemaType, BatchEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, BatchQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: BatchSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={batchSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={batchSchema}
      ref={formRef}
    >
      <BatchFormView />
    </Form>
  );
}
