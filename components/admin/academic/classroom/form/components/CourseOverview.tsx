"use client";

import { Card, FormSelect, Grid, TextField } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import React from "react";

const CourseOverview = () => {
  return (
    <div className="mt-2">
      <Card>
        <Card.Header title="Course Overview" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-12">
              <TextField
                label="Course name"
                placeholder="Course name"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Qualification</InputLabel>
              <FormSelect name="" placeholder="Institution Type" options={[]} />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Study Mode</InputLabel>
              <FormSelect name="" placeholder="Study Mode" options={[]} />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Duration"
                placeholder="Duration"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            {/* <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Intakes</InputLabel>
              <FormSelect name="" placeholder="Intakes" options={[]} />
            </Grid.Col> */}
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Tution(Local students)"
                placeholder="Set Fee"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Tution(Foreign students)"
                placeholder="Set Fee"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseOverview;
