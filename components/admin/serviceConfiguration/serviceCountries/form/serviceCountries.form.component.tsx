"use client";
import { refetchFn } from "@/common";
import {
  fetchSearviceCountryCreate,
  fetchSearviceCountryEdit,
  fetchSearviceCountrySingle,
  SearviceCountryQueryKey,
} from "@/common/api";
import { ServiceCountryEntity } from "@/common/entity/services/serviceCountry.entity";
import { useEditStore } from "@/common/store";
import { useEdit } from "@/hooks";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import {
  ServiceCountrychema,
  serviceCountryDefaultValues,
  ServiceCountrySchemaType,
} from "./serviceCountries.form.model";
import ServiceCountryFormView from "./serviceCountries.form.view";

export default function ServiceCountryFormComponent() {
  const formRef = useRef<FormRefProps<ServiceCountrySchemaType>>(null);
  const queryClient = useQueryClient();
  const { isEditReset, isEdit } = useEditStore((state) => state);
  const { id } = useEdit<ServiceCountrySchemaType, ServiceCountryEntity>({
    defaultValues: serviceCountryDefaultValues,
    queryKey: SearviceCountryQueryKey.Edit,
    queryFnApi: fetchSearviceCountrySingle,
    resetValues: (value) => formRef?.current?.reset(value),
  });

  const mutation = useMutation<
    ServiceCountryEntity,
    Error,
    ServiceCountrySchemaType
  >({
    mutationKey: isEdit
      ? [SearviceCountryQueryKey.Update]
      : [SearviceCountryQueryKey.Create],
    mutationFn: (value) =>
      isEdit
        ? fetchSearviceCountryEdit<
            ServiceCountrySchemaType,
            ServiceCountryEntity
          >(id, value)
        : fetchSearviceCountryCreate<
            ServiceCountrySchemaType,
            ServiceCountryEntity
          >(value),
    onSuccess: () => {
      formRef.current?.reset();
    },
    onSettled: () => {
      refetchFn(queryClient, SearviceCountryQueryKey.ALLList);
      isEditReset();
    },
  });

  const onSubmitHandler = async (value: ServiceCountrySchemaType) => {
    if (isEdit) {
      mutation.mutateAsync(value);
    } else {
      mutation.mutateAsync(value);
    }
  };

  return (
    <Form
      defaultValues={serviceCountryDefaultValues}
      onSubmit={onSubmitHandler}
      schema={ServiceCountrychema}
      ref={formRef}
    >
      <ServiceCountryFormView formRef={formRef} />
    </Form>
  );
}
