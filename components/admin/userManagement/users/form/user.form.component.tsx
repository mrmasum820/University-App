"use client";
import { Form, FormRefProps } from "@/uikit/ui";
import { useRef } from "react";
import {
  userDefaultValues,
  userSchema,
  UserSchemaType,
} from "./user.form.model";
import UserFormView from "./user.form.view";
export default function UserFormComponent() {
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
      <UserFormView formRef={formRef} />
    </Form>
  );
}
