"use client";
import { refetchFn } from "@/common";
import {
  serviceCreate,
  serviceEdit,
  ServiceQueryKey,
  serviceUpdate,
} from "@/common/api";
import { ServiceEntity } from "@/common/entity/services/service.entity";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRef } from "react";
import {
  serviceDefaultValues,
  serviceSchema,
  ServiceSchemaType,
} from "./service.form.model";
import ServiceFormView from "./service.form.view";

export default function ServiceFormComponent() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<ServiceSchemaType>>(null);
  useQuery<
    ServiceEntity,
    Error,
    ServiceEntity
  >({
    queryKey: [ServiceQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await serviceEdit(id);
      formRef?.current?.reset(editData);
      return editData; // Ensure the function returns the fetched data
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<ServiceEntity, Error, ServiceSchemaType>({
    mutationKey: id ? [ServiceQueryKey.Update] : [ServiceQueryKey.Create],
    mutationFn: (value) =>
      id
        ? serviceUpdate<ServiceSchemaType, ServiceEntity>(id, value)
        : serviceCreate<ServiceSchemaType, ServiceEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: () => {
      refetchFn(queryClient, ServiceQueryKey.ALL_List);
    },
  });
  const onSubmitHandler = async (value: ServiceSchemaType) => {
    const modifyData = {
      ...value,
      category_id: value?.child_id
        ? value?.child_id
        : value?.parent_id
        ? value?.parent_id
        : value?.category_id
        ? value?.category_id
        : 0,
    };
    if (id) {
      mutation.mutateAsync(modifyData);
    } else {
      mutation.mutateAsync(modifyData);
    }
  };
  return (
    <Form
      defaultValues={serviceDefaultValues}
      onSubmit={onSubmitHandler}
      schema={serviceSchema}
      ref={formRef}
    >
      <ServiceFormView />
    </Form>
  );
}
