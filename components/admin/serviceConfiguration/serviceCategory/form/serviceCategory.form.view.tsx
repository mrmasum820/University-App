"use client";
import { ServiceCategoryEntity, TBasicFormViewProps } from "@/common";
import { getParentCategoryList } from "@/common/getDropdown";
import { useEditStore } from "@/common/store";
import { Card, FormSelect, FormTextField, OutlineButton } from "@/uikit/ui";
import {
  serviceCategoryDefaultValues,
  ServiceCategorySchemaType,
} from "./serviceCategory.form.model";

export default function ServiceCategoryFormView(
  props: TBasicFormViewProps<ServiceCategorySchemaType>
) {
  const { formRef } = props;
  const { isEdit } = useEditStore((state) => state);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">
        {isEdit ? "Update Service Category" : "Service Category"}
      </h2>
      <p className="text-gray-500 text-sm">
        Manage your university program categories here with ease. To customize
        how categories appear on the front-end, simply drag and drop them into
        your preferred order
      </p>
      {/* add new user */}
      <div className="mt-9">
        <Card>
          <Card.Header title="Add New Category" />
          <Card.Body>
            <div className="px-2 pb-4">
              {/* username */}
              <div className="mt-3">
                <FormTextField<ServiceCategorySchemaType>
                  name="title"
                  label="Name"
                  placeholder="Name"
                />
              </div>
              {/* slug */}
              <div className="mt-3">
                <FormTextField<ServiceCategorySchemaType>
                  name="slug"
                  label="Slug"
                  placeholder="Slug"
                />
              </div>
              <div className="mt-3">
                <h2 className="font-semibold text-gray-500 mb-2">
                  Parent Category
                </h2>
                <FormSelect<ServiceCategorySchemaType>
                  name="parent_id"
                  options={getParentCategoryList<ServiceCategoryEntity>()}
                  searchable
                />
              </div>

              {/* <div className="mt-3">
                <h2 className="font-semibold text-gray-500 mb-2">
                  Upload Image
                </h2>
                <FormUpload<ServiceCategorySchemaType>
                  name="image"
                  placeholder="Upload Image"
                />
              </div> */}
            </div>
          </Card.Body>
        </Card>
        {/* add button */}
        <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
          <OutlineButton
            type="button"
            onClick={() =>
              formRef?.current?.reset(serviceCategoryDefaultValues)
            }
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
