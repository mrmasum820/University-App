"use client";
import {Form, FormRefProps} from "@/uikit/ui";
import {useRef} from "react";
import {userDefaultValues, userSchema, UserSchemaType,} from "./department.form.model";
import DepartmentFormView from "./department.form.view";

export default function DepartmentFormComponent() {
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
            <DepartmentFormView formRef={formRef}/>
        </Form>
    );
}
