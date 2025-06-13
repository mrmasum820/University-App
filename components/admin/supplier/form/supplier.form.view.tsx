import { TBasicFormViewProps } from "@/common";
import { getSupperlierCategoryList } from "@/common/getDropdown";
import {
  Button,
  Card,
  FormSelect,
  FormTextEditor,
  FormTextField,
  FormUpload,
  Grid
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { useParams } from "next/navigation";
import {
  supplierDefaultValues,
  SupplierSchemaType,
} from "./supplier.form.model";

export default function SupplierFormView({
  formRef,
}: TBasicFormViewProps<SupplierSchemaType>) {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="min-h-screen md:flex flex-col md:flex-row">
      <div className="w-full bg-gray-100 md:pr-4">
        <Card>
          <Card.Header title="Add New Agents" />
          <Card.Body>
            <Grid>
              <Grid.Col className="col-span-12 md:col-span-6">
                <InputLabel>Supplier Category</InputLabel>
                <FormSelect<SupplierSchemaType>
                  name="category_id"
                  options={getSupperlierCategoryList()}
                  placeholder="Select Supplier Category"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="name"
                  placeholder="Enter name"
                  label="Enter Name"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="email"
                  placeholder="Enter Email"
                  label="Enter Email"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="phone"
                  placeholder="Enter Phone"
                  label="Enter Phone"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="address"
                  placeholder="Enter Address"
                  label="Enter Address"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="address_second"
                  placeholder="Enter second address"
                  label="Enter Second Address"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="state"
                  placeholder="Enter State"
                  label="Enter State"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="city"
                  placeholder="Enter City"
                  label="Enter City"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="zip"
                  placeholder="Enter Zip"
                  label="Enter Zip"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="country"
                  placeholder="Enter Country"
                  label="Enter Country"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="price"
                  placeholder="Enter Price"
                  label="Enter Price"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="cost_price"
                  placeholder="Enter Cost Price"
                  label="Enter Cost Price"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="selling_price"
                  placeholder="Enter Selling Price"
                  label="Enter Selling Price"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField<SupplierSchemaType>
                  name="gross_margin"
                  placeholder="Enter Gross Margin"
                  label="Enter Gross Margin"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12">
                <FormUpload<SupplierSchemaType>
                  name="image"
                  placeholder="Upload Image"
                  label="Upload Image"
                />
              </Grid.Col>

              <Grid.Col>
                <InputLabel>Note</InputLabel>
                <FormTextEditor<SupplierSchemaType>
                  name="note"
                  placeholder="Enter Note"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12">
                <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
                </div>
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="gradient" color="danger" startIcon="x"
                    onClick={() => formRef?.current?.reset(supplierDefaultValues)} >Clear</Button>
                  <Button type="submit" variant="gradient" color="primary" startIcon={id ? "update" : "save"} > {id ? "Update" : "Add"}</Button>
                </div>
              </Grid.Col>
            </Grid>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
