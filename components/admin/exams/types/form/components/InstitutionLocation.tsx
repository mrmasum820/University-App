"use client";

import { Card, FormSelect, Grid, TextField } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import React from "react";

const InstitutionLocation = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Institution Location" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="State"
                placeholder="State"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Town/City"
                placeholder="Town/City"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Country</InputLabel>
              <FormSelect
                name=""
                placeholder="Country"
                options={[
                  { value: "bd", label: "BD" },
                  { value: "malaysia", label: "Malaysia" },
                ]}
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InstitutionLocation;
