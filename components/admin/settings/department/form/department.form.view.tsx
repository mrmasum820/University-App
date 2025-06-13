"use client";
import { TBasicFormViewProps } from "@/common";
import {
  Card,
  FormCheckbox,
  FormRadio,
  FormTextField,
  FormUpload,
  OutlineButton
} from "@/uikit/ui";
import { userDefaultValues, UserSchemaType } from "./department.form.model";

export default function DepartmentFormView(
  props: TBasicFormViewProps<UserSchemaType>
) {
  const { formRef } = props;

  return (
    <div className="md:w-1/3">
      <h2 className="text-2xl font-semibold mb-2">Add New User</h2>
      <p className="text-gray-500 text-sm">
        Create a brand new user and add them to this site
      </p>
      {/* add new user */}
      <div className="mt-2">
        <Card>
          <Card.Body>
            <div className="px-2 pb-4">
              {/* username */}
              <div className="mt-3">
                <FormTextField<UserSchemaType>
                  name="username"
                  label="Username"
                  placeholder="Username"
                />
              </div>
              {/* email */}
              <div className="mt-3">
                <FormTextField<UserSchemaType>
                  name="email"
                  label="Email"
                  placeholder="Email"
                />
              </div>
              {/* First name */}
              <div className="mt-3">
                <FormTextField<UserSchemaType>
                  name="name"
                  label="Name"
                  placeholder="Name"
                />
              </div>
              {/* gender */}
              <div className="mt-3">
                <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                  Gender
                </h4>
                <FormRadio<UserSchemaType>
                  name="gender"
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                />
              </div>

              {/* passwords */}
              <div className="mt-3">
                <FormTextField<UserSchemaType>
                  type="password"
                  name="password"
                  label="Passwords"
                  placeholder="passwords"
                />
              </div>

              {/* country */}
              {/* <div className="mt-3">
                <h2 className="font-semibold text-gray-500 mb-2">Country</h2>
                <FormDropdown<UserSchemaType>
                  name="nationality"
                  options={[
                    { id: 1, label: "Bangladesh" },
                    { id: 2, label: "Malaysia" },
                  ]}
                />
              </div> */}

              {/* department */}
              {/* <div className="mt-3">
                <h2 className="font-semibold text-gray-500 mb-2">Department</h2>
                <FormDropdown<UserSchemaType>
                  name="department_id"
                  options={[
                    { id: 1, label: "Admin" },
                    { id: 2, label: "Marketing" },
                    { id: 3, label: "Sales" },
                  ]}
                />
              </div> */}

              {/* user role */}
              {/* <div className="mt-3">
                <h2 className="font-semibold text-gray-500 mb-2">Role</h2>
                <FormDropdown<UserSchemaType>
                  name="role_id"
                  options={[
                    { id: 1, label: "Admin" },
                    { id: 2, label: "User" },
                  ]}
                />
              </div> */}

              {/* foreigner*/}
              <div className="my-4">
                <FormCheckbox<UserSchemaType>
                  name="isForigner"
                  label="Is Forigner"
                />
              </div>

              {/* super user */}
              <div className="mb-4">
                <FormCheckbox<UserSchemaType>
                  name="is_superuser"
                  label="Is Super User"
                />
              </div>

              {/* parent category */}
              <div className="mt-3">
                <h2 className="font-semibold text-gray-500 mb-2">User Image</h2>
                <FormUpload<UserSchemaType>
                  name="image"
                  placeholder="Upload Picture"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
        {/* add button */}
        <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
          <OutlineButton
            type="button"
            onClick={() => formRef?.current?.reset(userDefaultValues)}
          >
            Clear
          </OutlineButton>
          <OutlineButton type="submit">Add</OutlineButton>
        </div>
      </div>
    </div>
  );
}
