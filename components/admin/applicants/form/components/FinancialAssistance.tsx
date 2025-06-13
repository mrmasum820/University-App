"use client";

import { Card, FormTextField, Grid, useFormContext } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ApplicantSchemaType } from "../applicant.form.model";
import MultiCheckbox from "@/uikit/ui/basic/MultiCheckbox";
import { useState } from "react";

const FinancialAssistance = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const {
    form: {},
  } = useFormContext<ApplicantSchemaType>();
  // const noteShow = watch("appication_only.application_type") === "others";
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Financial Assistance" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-12">
              <InputLabel>
                If you have the following pass, please tick
              </InputLabel>
              {/* <FormRadio<ApplicantSchemaType>
                name="appication_only.application_type"
                options={[
                  { label: "Malaysian PR", value: "malaysian" },
                  { label: "Student", value: "student" },
                  { label: "Dependent", value: "dependent" },
                  { label: "Diplomatic", value: "diplomatic" },
                  { label: "MM2H", value: "mm2h" },
                  { label: "Work Permit", value: "work" },
                  { label: "Others(Please specify)", value: "others" },
                ]}
              /> */}
              <MultiCheckbox
                options={[
                  { label: "Sponsored", value: "sponsored" },
                  { label: "Self-Funding", value: "self" },
                  { label: "Scholarship", value: "scholarship" },
                  { label: "PTPTK", value: "ptptk" },
                  { label: "Others", value: "others" },
                ]}
                selectedValues={selected}
                onChange={setSelected}
              />
            </Grid.Col>
            {/* {noteShow && (
              <Grid.Col className="col-span-12 md:col-span-12">
                <FormTextField<ApplicantSchemaType>
                  name="appication_only.note"
                  label="Note"
                  placeholder="Note"
                />
              </Grid.Col>
            )} */}
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Institute's Name"
                placeholder="Institute's Name"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Address" placeholder="Address" />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Phone" placeholder="Phone" />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default FinancialAssistance;
