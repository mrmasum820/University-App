"use client";
import { TBasicFormViewProps } from "@/common";
import { useEditStore } from "@/common/store";
import { Button, Card, FormTextField, Grid } from "@/uikit/ui";
import { sourceDefaultValues, SourceSchemaType } from "./source.form.model";

export default function SourceFormView(
  props: TBasicFormViewProps<SourceSchemaType>
) {
  const { formRef } = props;
  const { isEdit } = useEditStore((state) => state);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">
        {isEdit ? "Update Lead Source" : "Add New Lead Source"}
      </h2>
      <p className="text-gray-500 text-sm">
        Create a brand new lead source and add them to this site
      </p>
      <div className="mt-2">
        <Card>
          <Card.Body>
            <Grid>
              <Grid.Col className="col-span-12">
                <FormTextField<SourceSchemaType>
                  name="name"
                  label="Name"
                  placeholder="Name"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12">
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="gradient"
                    color="danger"
                    startIcon="x"
                    onClick={() => formRef?.current?.reset(sourceDefaultValues)}
                  >
                    Clear
                  </Button>
                  <Button
                    type="submit"
                    variant="gradient"
                    color="primary"
                    startIcon={isEdit ? "update" : "save"}
                  >
                    {" "}
                    {isEdit ? "Update" : "Add"}
                  </Button>
                </div>
              </Grid.Col>
            </Grid>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
