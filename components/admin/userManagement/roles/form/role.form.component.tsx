"use client";
import { Form, FormRefProps } from "@/uikit/ui";
import { useRef } from "react";
import {
  userDefaultValues,
  userSchema,
  UserSchemaType,
} from "./role.form.model";
import RoleFormView from "./role.form.view";
export default function RoleFormComponent() {
  const formRef = useRef<FormRefProps<UserSchemaType>>(null);
  const onSubmitHandler = async (value: UserSchemaType) => {
    console.log(value);
  };

  return (
    <Form
      defaultValues={userDefaultValues}
      onSubmit={onSubmitHandler}
      schema={userSchema}
      ref={formRef}
    >
      <RoleFormView formRef={formRef} />
    </Form>
  );
}
