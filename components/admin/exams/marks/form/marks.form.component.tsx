"use client";
import { MarksEntity, refetchFn } from "@/common";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  marksSchema,
  marksSchemaDefaultValues,
  MarksSchemaType,
} from "./marks.form.model";
import {
  marksCreate,
  marksEdit,
  MarksQueryKey,
  marksUpdate,
} from "@/common/api/exams/marks.api";
import MarksFormView from "./marks.form.view";

export default function MarksFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<MarksSchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<MarksSchemaType, MarksEntity>({
    defaultValues: marksSchemaDefaultValues,
    queryKey: MarksQueryKey.Edit,
    queryFnApi: marksEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<MarksEntity, Error, MarksSchemaType>({
    mutationKey: isEdit ? [MarksQueryKey.Update] : [MarksQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? marksUpdate<MarksSchemaType, MarksEntity>(id, value)
        : marksCreate<MarksSchemaType, MarksEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, MarksQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: MarksSchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={marksSchemaDefaultValues}
      onSubmit={onSubmitHandler}
      schema={marksSchema}
      ref={formRef}
    >
      <MarksFormView />
    </Form>
  );
}
