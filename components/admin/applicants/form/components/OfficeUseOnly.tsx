"use client";

import {
  Card,
  FormDateInput,
  FormRadio,
  FormTextField,
  Grid,
} from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import MultiCheckbox from "@/uikit/ui/basic/MultiCheckbox";
import { useState } from "react";

const OfficeUseOnly = () => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <>
      <Grid.Col className="col-span-12">
        <Card>
          <Card.Header title="Office Use Only" />
          <Card.Body>
            <Grid>
              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField
                  name=""
                  label="Matric Number"
                  placeholder="Matric Number"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField name="" label="Batch" placeholder="Batch" />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField
                  name=""
                  label="Intake Year"
                  placeholder="Intake Year"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormTextField name="" label="Month" placeholder="Month" />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-6">
                <FormDateInput name="" label="Date" placeholder="Date" />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-3">
                <InputLabel>Applicant</InputLabel>
                <FormRadio
                  name=""
                  options={[
                    { label: "Malaysian", value: "malaysian" },
                    { label: "International", value: "international" },
                  ]}
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-3">
                <InputLabel>Study Mode</InputLabel>
                <FormRadio
                  name=""
                  options={[
                    { label: "Full Time", value: "fulltime" },
                    { label: "Part Time", value: "parttime" },
                  ]}
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-6">
                <InputLabel>
                  Do you have any medical condition that needs attention?
                </InputLabel>
                <FormRadio
                  name=""
                  options={[
                    { label: "Full Offer", value: "fulloffer" },
                    { label: "Conditional Offer", value: "conditionaloffer" },
                  ]}
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField
                  name=""
                  label="Please Specify"
                  placeholder="Please Specify"
                />
              </Grid.Col>

              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField
                  name=""
                  label="Signature"
                  placeholder="Signature"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField
                  name=""
                  label="Counselled By"
                  placeholder="Counselled By"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField name="" label="Remarks" placeholder="Remarks" />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField
                  name=""
                  label="Approved By"
                  placeholder="Approved By"
                />
              </Grid.Col>
              <Grid.Col className="col-span-12 md:col-span-12">
                <InputLabel>Payment Status</InputLabel>
                <MultiCheckbox
                  options={[
                    { label: "Application Fees", value: "application" },
                    { label: "Registration Fees", value: "registration" },
                    { label: "Tution Fees", value: "tution" },
                    { label: "Other Fees", value: "other" },
                  ]}
                  selectedValues={selected}
                  onChange={setSelected}
                />
              </Grid.Col>
              {/* <Grid.Col className="col-span-12 md:col-span-4">
                <FormTextField
                  name=""
                  label="Signature"
                  placeholder="Signature"
                />
              </Grid.Col> */}
            </Grid>
          </Card.Body>
        </Card>
      </Grid.Col>
    </>
  );
};

export default OfficeUseOnly;
