"use client";
import { refetchFn, ServiceCategoryEntity } from "@/common";
import {
  serviceCategoryCreate,
  serviceCategoryEdit,
  ServiceCategoryQueryKey,
  serviceCategoryUpdate,
} from "@/common/api";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  serviceCategoryDefaultValues,
  serviceCategorySchema,
  ServiceCategorySchemaType,
} from "./serviceCategory.form.model";
import ServiceCategoryFormView from "./serviceCategory.form.view";

export default function ServiceCategoryFormComponent() {
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ServiceCategorySchemaType>>(null);
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ServiceCategorySchemaType, ServiceCategoryEntity>({
    defaultValues: serviceCategoryDefaultValues,
    queryKey: ServiceCategoryQueryKey.Edit,
    queryFnApi: serviceCategoryEdit,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<
    ServiceCategoryEntity,
    Error,
    ServiceCategorySchemaType
  >({
    mutationKey: isEdit
      ? [ServiceCategoryQueryKey.Update]
      : [ServiceCategoryQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? serviceCategoryUpdate<
            ServiceCategorySchemaType,
            ServiceCategoryEntity
          >(id, value)
        : serviceCategoryCreate<
            ServiceCategorySchemaType,
            ServiceCategoryEntity
          >(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, ServiceCategoryQueryKey.ALL_List);
      isEditReset();
    },
  });
  const onSubmitHandler = async (value: ServiceCategorySchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={serviceCategoryDefaultValues}
      onSubmit={onSubmitHandler}
      schema={serviceCategorySchema}
      ref={formRef}
    >
      <ServiceCategoryFormView formRef={formRef} />
    </Form>
  );
}
