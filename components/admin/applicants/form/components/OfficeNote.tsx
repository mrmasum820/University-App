"use client";

import { Card, FormTextEditor, Grid } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ApplicantSchemaType } from "../applicant.form.model";

const OfficeNote = () => {
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="OfficeNote" />
        <Card.Body>
          <div>
            <InputLabel className="mb-2 font-semibold text-gray-600">Note</InputLabel>
            <FormTextEditor<ApplicantSchemaType> name="notes" />
          </div>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default OfficeNote;
