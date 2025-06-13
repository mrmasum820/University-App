"use client";
import { Card, FormTextField, Grid } from "@/uikit/ui";
import Textarea from "@/uikit/ui/basic/Textarea";

const GuardianInformation = () => {
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Guardian Information" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Guardian's Name"
                placeholder="Guardian's Name"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Relation" placeholder="Relation" />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Institute"
                placeholder="Institute"
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Phone" placeholder="Phone" />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Occupation"
                placeholder="Occupation"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Income" placeholder="Income" />
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

export default GuardianInformation;
