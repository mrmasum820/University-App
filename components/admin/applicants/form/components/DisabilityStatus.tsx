"use client";

import { Card, FormTextField, Grid } from "@/uikit/ui";
import SingleCheckbox from "@/uikit/ui/basic/SingleCheckbox";

const DisabilityStatus = () => {
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Disability Status" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-12">
              <SingleCheckbox
                label="I do not have a disability or illness that requires special attention."
                value="true"
                checked={false}
                onChange={() => {}}
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-12">
              <SingleCheckbox
                label="I have a disability that requires a special attention."
                value="true"
                checked={false}
                onChange={() => {}}
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-12">
              <FormTextField
                name=""
                label="Please Specify"
                placeholder="Specify"
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default DisabilityStatus;
