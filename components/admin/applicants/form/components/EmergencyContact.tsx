"use client";

import { Card, FormTextField, Grid } from "@/uikit/ui";
import Textarea from "@/uikit/ui/basic/Textarea";

const EmergencyContact = () => {
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Emergency Contact" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Full name"
                placeholder="Full name"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Relationship"
                placeholder="Relationship"
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Phone" placeholder="Phone" />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-12">
              {/* <FormTextField name="" label="Address" placeholder="Address" /> */}
              <Textarea label="Address" rows={3} placeholder="Address" />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default EmergencyContact;
