import { Form, FormRefProps } from "@/uikit/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRef } from "react";
import {
  attendanceSchemaDefaultValues,
  attendanceSchema,
  AttendanceSchemaType,
} from "./attendance.form.model";
import { AttendanceEntity } from "@/common";
import {
  attendanceCreate,
  attendanceEdit,
  AttendanceQueryKey,
  attendanceUpdate,
} from "@/common/api/attendance/attendance.api";
import AttendanceFormView from "./attendance.form.view";

export default function AttendanceFormComponent() {
  const { id } = useParams<{ id: string }>();
  // const navigate = useRouter();
  const formRef = useRef<FormRefProps<AttendanceSchemaType>>(null);

  useQuery<AttendanceEntity, Error, AttendanceEntity>({
    queryKey: [AttendanceQueryKey.Edit, id],
    queryFn: async () => {
      const editData = await attendanceEdit(Number(id));
      formRef?.current?.reset(editData);
      return editData;
    },
    enabled: id ? true : false,
  });

  const mutation = useMutation<AttendanceEntity, Error, AttendanceSchemaType>({
    mutationKey: id
      ? [AttendanceQueryKey.Update, id]
      : [AttendanceQueryKey.Create],
    mutationFn: (value) =>
      id
        ? attendanceUpdate<AttendanceSchemaType, AttendanceEntity>(
            Number(id),
            value
          )
        : attendanceCreate<AttendanceSchemaType, AttendanceEntity>(value),
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
  const onSubmit = (value: AttendanceSchemaType) => {
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
      defaultValues={attendanceSchemaDefaultValues}
      schema={attendanceSchema}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <AttendanceFormView formRef={formRef} />
    </Form>
  );
}
