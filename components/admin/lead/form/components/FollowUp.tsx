"use client";

import { Card, FormDateInput, FormRadio, FormTextField, Grid } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { FormCheck } from "@/uikit/ui/form/FormCheck";
import { LeadSchemaType } from "../lead.form.model";

const FollowUp = () => {

  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Follow Up" />
        <Card.Body>

          <Grid>
            <Grid.Col>
              <FormDateInput<LeadSchemaType> name="lead_complete.lead_follow_up.after_date" label="Next Follow Up" />
            </Grid.Col>
            <Grid.Col>
              <FormCheck<LeadSchemaType> label="Remainder me" name="lead_complete.lead_follow_up.is_reminder" />
            </Grid.Col>
            <Grid.Col>
              <InputLabel>Follow via</InputLabel>
              <FormRadio<LeadSchemaType>
                name="lead_complete.lead_follow_up.follow_via"
                options={[{ label: "Phone", value: "phone" }, { label: "Email", value: "email" }, { label: "Whatsapp", value: "whatsapp" }]}
              />
            </Grid.Col>
            <Grid.Col>
              <FormTextField<LeadSchemaType>
                name="lead_complete.lead_follow_up.notes" 
                label="Update Report"
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FollowUp;
