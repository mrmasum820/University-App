import { ApplicantEntity } from "@/common";
import {
  applicantCreate,
  applicantEdit,
  ApplicantQueryKey,
  applicantUpdate,
} from "@/common/api";
import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRef } from "react";
import {
  applicantDefaultValues,
  applicantSchema,
  ApplicantSchemaType,
} from "./applicant.form.model";
import ApplicantFormView from "./applicant.form.view";
export default function ApplicantFormComponent() {
  const { id } = useParams<{ id: string }>();
  // const navigate = useRouter();
  const formRef = useRef<FormRefProps<ApplicantSchemaType>>(null);

  useQuery<ApplicantEntity, Error, ApplicantEntity>({
    queryKey: [ApplicantQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await applicantEdit(Number(id));
      formRef?.current?.reset(editData);
      return editData;
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<ApplicantEntity, Error, ApplicantSchemaType>({
    mutationKey: id
      ? [ApplicantQueryKey.Update, id]
      : [ApplicantQueryKey.Create],
    mutationFn: (value) =>
      id
        ? applicantUpdate<ApplicantSchemaType, ApplicantEntity>(
            Number(id),
            value
          )
        : applicantCreate<ApplicantSchemaType, ApplicantEntity>(value),
    onSuccess: () => {
      formRef?.current?.reset();
    },
    onError: (err) => {
      console.log("error========>", err);
    },
    onSettled: () => {
      // navigate.push("/lead");
    },
  });
  const onSubmit = (value: ApplicantSchemaType) => {
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
      defaultValues={applicantDefaultValues}
      schema={applicantSchema}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <ApplicantFormView formRef={formRef} />
    </Form>
  );
}
