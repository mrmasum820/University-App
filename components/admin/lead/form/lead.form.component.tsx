import { LeadEntity } from "@/common";
import { leadCreate, leadEdit, LeadQueryKey, leadUpdate } from "@/common/api";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import {
  leadDefaultValues,
  leadSchema,
  LeadSchemaType,
} from "./lead.form.model";
import LeadFormView from "./lead.form.view";
export default function LeadFormComponent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useRouter();
  const formRef = useRef<FormRefProps<LeadSchemaType>>(null);
  useQuery<
    LeadEntity,
    Error,
    LeadEntity
  >({
    queryKey: [LeadQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await leadEdit(id);
      // const dataModified = {
      //   ...editData,
      //   lead_payment:{
      //     ...editData.lead_payment,
      //     fee_items: editData.lead_payment.fee_items.map((item:any) => {
      //       return {
      //         ...item,
      //         title: item.title,
      //         fee_type_id: item.fee_type_id?.id,
      //       };
      //     })
      //   }
      // };
      
      formRef?.current?.reset(editData);
      return editData; 
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<LeadEntity, Error, LeadSchemaType>({
    mutationKey:  id ? [LeadQueryKey.Update, id] : [LeadQueryKey.Create],
    mutationFn: (value) => id
            ? leadUpdate<LeadSchemaType, LeadEntity>(id, value)
            : leadCreate<LeadSchemaType, LeadEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onError: (err) => {
      console.log("error========>",err);
    },
    onSettled: () => {
      navigate.push("/lead");
    },
  });
  const onSubmit = (value: LeadSchemaType) => {
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
      defaultValues={leadDefaultValues}
      schema={leadSchema}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <LeadFormView formRef={formRef} />
    </Form>
  );
}
