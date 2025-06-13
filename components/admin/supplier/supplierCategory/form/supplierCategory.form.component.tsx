"use client";
import { refetchFn, SupplierCategoryEntity } from "@/common";
import {
  supplierCategoryCreate,
  supplierCategoryEdit,
  SupplierCategoryQueryKey,
  supplierCategoryUpdate,
} from "@/common/api";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  supplierCategoryDefaultValues,
  supplierCategorySchema,
  SupplierCategorySchemaType,
} from "./supplierCategory.form.model";
import SupplierCategoryFormView from "./supplierCategory.form.view";

export default function SupplierCategoryFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<SupplierCategorySchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<SupplierCategorySchemaType, SupplierCategoryEntity>({
    defaultValues: supplierCategoryDefaultValues,
    queryKey: SupplierCategoryQueryKey.Edit,
    queryFnApi: supplierCategoryEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<
    SupplierCategoryEntity,
    Error,
    SupplierCategorySchemaType
  >({
    mutationKey: isEdit
      ? [SupplierCategoryQueryKey.Update]
      : [SupplierCategoryQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? supplierCategoryUpdate<
            SupplierCategorySchemaType,
            SupplierCategoryEntity
          >(id, value)
        : supplierCategoryCreate<
            SupplierCategorySchemaType,
            SupplierCategoryEntity
          >(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, SupplierCategoryQueryKey.ALL_List);
      isEditReset();
    },
  });

  const onSubmitHandler = async (value: SupplierCategorySchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={supplierCategoryDefaultValues}
      onSubmit={onSubmitHandler}
      schema={supplierCategorySchema}
      ref={formRef}
    >
      <SupplierCategoryFormView formRef={formRef} />
    </Form>
  );
}
