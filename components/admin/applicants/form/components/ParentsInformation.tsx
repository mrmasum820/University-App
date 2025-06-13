"use client";
import { Card, FormTextField, Grid } from "@/uikit/ui";

const ParentsInformation = () => {
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Parents Information" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Father's Name"
                placeholder="Father's Name"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Address" placeholder="Address" />
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
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Institute"
                placeholder="Institute"
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Mother's Name"
                placeholder="Mother's Name"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField name="" label="Address" placeholder="Address" />
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
            <Grid.Col className="col-span-12 md:col-span-4">
              <FormTextField
                name=""
                label="Institute"
                placeholder="Institute"
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default ParentsInformation;
