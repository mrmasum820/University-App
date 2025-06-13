import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRef } from "react";
import {
  leaveSchema,
  leaveSchemaDefaultValues,
  LeaveSchemaType,
} from "./leave.form.model";
import { LeaveEntity } from "@/common";
import {
  leaveCreate,
  leaveEdit,
  LeaveQueryKey,
  leaveUpdate,
} from "@/common/api/attendance/leave.api";
import LeaveFormView from "./leave.form.view";

export default function LeaveFormComponent() {
  const { id } = useParams<{ id: string }>();
  // const navigate = useRouter();
  const formRef = useRef<FormRefProps<LeaveSchemaType>>(null);

  useQuery<LeaveEntity, Error, LeaveEntity>({
    queryKey: [LeaveQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await leaveEdit(Number(id));
      formRef?.current?.reset(editData);
      return editData;
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<LeaveEntity, Error, LeaveSchemaType>({
    mutationKey: id ? [LeaveQueryKey.Update, id] : [LeaveQueryKey.Create],
    mutationFn: (value) =>
      id
        ? leaveUpdate<LeaveSchemaType, LeaveEntity>(Number(id), value)
        : leaveCreate<LeaveSchemaType, LeaveEntity>(value),
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
  const onSubmit = (value: LeaveSchemaType) => {
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
      defaultValues={leaveSchemaDefaultValues}
      schema={leaveSchema}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <LeaveFormView formRef={formRef} />
    </Form>
  );
}
