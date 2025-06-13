"use client";
import { TBasicFormViewProps } from "@/common";
import { Card, FormTextEditor, FormTextField, OutlineButton } from "@/uikit/ui";
import {
  serviceCountryDefaultValues,
  ServiceCountrySchemaType,
} from "./serviceCountries.form.model";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { useEditStore } from "@/common/store";

export default function ServiceCountryFormView(
  props: TBasicFormViewProps<ServiceCountrySchemaType>
) {
    const { isEdit } = useEditStore((state) => state);
  
  const { formRef } = props;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Add Service Type</h2>
      <p className="text-gray-500 text-sm">
        Create a service type and add them to this site
      </p>
      {/* add new user */}
      <div className="mt-2">
        <Card>
          <Card.Body>
            <div className="px-2 pb-4">
              {/* title */}
              <div className="mt-3">
                <FormTextField<ServiceCountrySchemaType>
                  name="name"
                  label="Name"
                  placeholder="Name"
                />
              </div>

              {/* Description */}
              <div className="mt-3">
                <InputLabel>Roules Of Country</InputLabel>
                <FormTextEditor<ServiceCountrySchemaType>
                  name="roules"
                  placeholder="Roules Of Country"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
        {/* add button */}
        <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
          <OutlineButton
            type="button"
            onClick={() => formRef?.current?.reset(serviceCountryDefaultValues)}
          >
            Clear
          </OutlineButton>
          <OutlineButton type="submit">
            {isEdit ? "Update" : "Add"}
          </OutlineButton>
        </div>
      </div>
    </div>
  );
}
