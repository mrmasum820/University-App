"use client";
import { AgentsEntity } from "@/common";
import {
  agentsCreate,
  agentsEdit,
  AgentsQueryKey,
  agentsUpdate
} from "@/common/api";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import {
  agentsDefaultValues,
  agentsSchema,
  AgentsSchemaType,
} from "./agents.form.model";
import AgentsFormView from "./agents.form.view";

export default function AgentsFormComponent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useRouter();
  const formRef = useRef<FormRefProps<AgentsSchemaType>>(null);
  useQuery<
    AgentsEntity,
    Error,
    AgentsEntity
  >({
    queryKey: [AgentsQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await agentsEdit(Number(id));
      formRef?.current?.reset(editData);
      return editData; // Ensure the function returns the fetched data
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<AgentsEntity, Error, AgentsSchemaType>({
    mutationKey: id ? [AgentsQueryKey.Update] : [AgentsQueryKey.Create],
    mutationFn: (value) =>
      id
        ? agentsUpdate<AgentsSchemaType, AgentsEntity>(Number(id), value)
        : agentsCreate<AgentsSchemaType, AgentsEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: () => {
      navigate.push("/applicants/agents");
    },
  });
  const onSubmitHandler = async (value: AgentsSchemaType) => {
    const modifyData = {
      ...value,
    };
    if (id) {
      mutation.mutateAsync(modifyData);
    } else {
      mutation.mutateAsync(modifyData);
    }
  };
  return (
    <Form
      defaultValues={agentsDefaultValues}
      onSubmit={onSubmitHandler}
      schema={agentsSchema}
      ref={formRef}
    >
      <AgentsFormView formRef={formRef}/>
    </Form>
  );
}
