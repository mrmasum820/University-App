"use client";
import { refetchFn, SupplierEntity } from "@/common";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, redirect } from "next/navigation";
import { useRef } from "react";
import {
  supplierDefaultValues,
  SupplierSchema,
  SupplierSchemaType,
} from "./supplier.form.model";
import SupplierFormView from "./supplier.form.view";
import {
  suppliersCreate,
  suppliersEdit,
  SuppliersQueryKey,
  suppliersUpdate,
} from "@/common/api";

export default function SupplierFormComponent() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const formRef = useRef<FormRefProps<SupplierSchemaType>>(null);
  useQuery<SupplierEntity, Error, SupplierEntity>({
    queryKey: [SuppliersQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await suppliersEdit(id);
      formRef?.current?.reset(editData);
      return editData; // Ensure the function returns the fetched data
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<SupplierEntity, Error, SupplierSchemaType>({
    mutationKey: id ? [SuppliersQueryKey.Update] : [SuppliersQueryKey.Create],
    mutationFn: (value) =>
      id
        ? suppliersUpdate<SupplierSchemaType, SupplierEntity>(id, value)
        : suppliersCreate<SupplierSchemaType, SupplierEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: () => {
      refetchFn(queryClient, SuppliersQueryKey.ALL_List);
      redirect("/suppliers");
    },
  });
  const onSubmitHandler = async (value: SupplierSchemaType) => {
    const modifyData = {
      ...value,
    };
    console.log(modifyData);

    if (id) {
      mutation.mutateAsync(modifyData);
    } else {
      mutation.mutateAsync(modifyData);
    }
  };
  return (
    <Form
      defaultValues={supplierDefaultValues}
      onSubmit={onSubmitHandler}
      schema={SupplierSchema}
      ref={formRef}
    >
      <SupplierFormView formRef={formRef} />
    </Form>
  );
}
