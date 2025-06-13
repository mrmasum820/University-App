"use client";
import { TBasicFormViewProps } from "@/common";
import { useEditStore } from "@/common/store";
import { Button, Card, FormTextField, Grid } from "@/uikit/ui";
import {
  supplierCategoryDefaultValues,
  SupplierCategorySchemaType,
} from "./supplierCategory.form.model";

export default function SupplierCategoryFormView(
  props: TBasicFormViewProps<SupplierCategorySchemaType>
) {
  const { formRef } = props;
  const { isEdit, isEditReset } = useEditStore((state) => state);
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-2">
        {isEdit ? "Update Supplier Category" : "Add New Supplier Category"}
      </h2>
      <div className="mt-2">
        <Card>
          <Card.Body>
            <Grid>
              <Grid.Col className="col-span-12">
                <FormTextField<SupplierCategorySchemaType> name="name" label="Name" placeholder="Name" />
              </Grid.Col>
              <Grid.Col className="col-span-12">
                <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="gradient" color="danger" startIcon="x"
                  onClick={() => isEdit ? isEditReset() : formRef?.current?.reset(supplierCategoryDefaultValues)} >Clear</Button>
                <Button type="submit" variant="gradient" color="primary" startIcon={isEdit ? "update" : "save"} > {isEdit ? "Update" : "Add"}</Button>
                </div>
              </Grid.Col>
            </Grid>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
