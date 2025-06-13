"use client";
import { Form, FormRefProps } from "@/uikit/ui";
import { useRef } from "react";
import {
  userDefaultValues,
  userSchema,
  UserSchemaType,
} from "./permission.form.model";
import PermissionFormView from "./permission.form.view";
export default function PermissionFormComponent() {
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
      <PermissionFormView formRef={formRef} />
    </Form>
  );
}
