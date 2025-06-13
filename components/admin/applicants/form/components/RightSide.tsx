"use client";
import { getCurrentUser, TBasicViewProps } from "@/common";
import {
  Button,
  Card,
  FormDateInput,
  FormSelect,
  Grid,
  useFormContext,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { useEffect } from "react";
import {
  applicantDefaultValues,
  ApplicantSchemaType,
} from "../applicant.form.model";
import Assign from "./Assign";

type RightSideProps = TBasicViewProps<ApplicantSchemaType> & {
  clickSubmit?: () => void | Promise<void>;
};
const RightSide = ({ formRef }: RightSideProps) => {
  const {
    form: { setValue },
  } = useFormContext();
  const currentUserData = getCurrentUser();
  useEffect(() => {
    setValue("lead_complete.created_by", currentUserData?.id);
  }, [currentUserData, setValue]);
  return (
    <div>
      <Card>
        <Card.Header title="Publish">
          <Button
            type="submit"
            color="primary"
            startIcon="save"
            className="rounded-lg w-full"
            loading={formRef?.current?.form.formState.isSubmitting}
          >
            {" "}
            Publish{" "}
          </Button>
        </Card.Header>
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-6">
              <Button
                type="button"
                variant="outline"
                color="primary"
                startIcon="draft"
                className="rounded-lg w-full"
              >
                Save Draft
              </Button>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-6">
              <Button
                type="button"
                variant="solid"
                color="danger"
                startIcon="x"
                className="rounded-lg w-full"
                onClick={() => formRef?.current?.reset(applicantDefaultValues)}
              >
                Clear
              </Button>
            </Grid.Col>
            <Grid.Col className="col-span-12">
              <FormDateInput<ApplicantSchemaType> name="lead_complete.date" />
            </Grid.Col>
            <Grid.Col className="col-span-12">
              <InputLabel>Publish By</InputLabel>
              <FormSelect<ApplicantSchemaType>
                name="lead_complete.created_by"
                placeholder="Publish By"
                options={[
                  { label: currentUserData?.name, value: currentUserData?.id },
                ]}
              />
            </Grid.Col>
            <Grid.Col className="col-span-12">
              <InputLabel>Status</InputLabel>
              <FormSelect<ApplicantSchemaType>
                name="lead_complete.status"
                placeholder="Status"
                options={[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>

      {/* assign */}
      <Assign />
    </div>
  );
};

export default RightSide;
