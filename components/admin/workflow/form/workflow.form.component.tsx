"use client";
import { refetchFn, WorkflowEntity } from "@/common";
import {
  WorkflowQueryKey,
  workflowsCreate,
  workflowsEdit,
  workflowsUpdate,
} from "@/common/api";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  workflowDefaultValues,
  workflowSchema,
  WorkflowSchemaType,
} from "./workflow.form.model";
import WorkflowFormView from "./workflow.form.view";

export default function WorkflowFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<WorkflowSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<WorkflowSchemaType, WorkflowEntity>({
    defaultValues: workflowDefaultValues,
    queryKey: WorkflowQueryKey.Edit,
    queryFnApi: workflowsEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<WorkflowEntity, Error, WorkflowSchemaType>({
    mutationKey: [isEdit ? WorkflowQueryKey.Update : WorkflowQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? workflowsUpdate<WorkflowSchemaType, WorkflowEntity>(id, value)
        : workflowsCreate<WorkflowSchemaType, WorkflowEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      isEditReset();
      refetchFn(queryClient, WorkflowQueryKey.ALL_List);
    },
  });

  const onSubmitHandler = async (value: WorkflowSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={workflowDefaultValues}
      onSubmit={onSubmitHandler}
      schema={workflowSchema}
      ref={formRef}
    >
      <WorkflowFormView formRef={formRef} />
    </Form>
  );
}
