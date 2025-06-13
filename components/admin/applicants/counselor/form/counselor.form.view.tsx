"use client";
import { TBasicFormViewProps } from "@/common";
import { Card, FormTextField, Grid, OutlineButton } from "@/uikit/ui";
import {
  CounselorDefaultValues,
  CounselorSchemaType,
} from "./counselor.form.model";
import { useParams } from "next/navigation";

export default function CounselorFormView(
  props: TBasicFormViewProps<CounselorSchemaType>
) {
  const { formRef } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen md:flex flex-col md:flex-row">
      <div className="w-full bg-gray-100 md:pr-4">
        <Card>
          <Card.Header
            title={`${id ? "Update Counselor" : "Add New Counselor"}`}
          />
          <Card.Body>
            <Grid>
              <Grid.Col className="col-span-12 md:col-span-12">
                <FormTextField<CounselorSchemaType>
                  name="name"
                  placeholder="Full name"
                  label="Full name"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-12">
                <FormTextField<CounselorSchemaType>
                  name="email"
                  placeholder="Email"
                  label="Email"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-12">
                <FormTextField<CounselorSchemaType>
                  name="phone"
                  placeholder="Phone"
                  label="Phone"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-12">
                <FormTextField<CounselorSchemaType>
                  name="designation"
                  placeholder="Designation"
                  label="Designation"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12">
                <div className="mt-6 lg:w-full md:w-2/6 flex gap-4 justify-end">
                  <OutlineButton
                    type="button"
                    onClick={() =>
                      formRef?.current?.reset(CounselorDefaultValues)
                    }
                    variant="danger"
                  >
                    Clear
                  </OutlineButton>
                  <OutlineButton type="submit">
                    {id ? "Update" : "Add"}
                  </OutlineButton>
                </div>
              </Grid.Col>
            </Grid>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
