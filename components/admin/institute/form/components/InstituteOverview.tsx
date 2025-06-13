"use client";

import { Card, FormSelect, Grid, TextField } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import React from "react";

const InstituteOverview = () => {
  return (
    <div className="mt-2">
      <Card>
        <Card.Header title="Institute Overview" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-12">
              <TextField
                label="Institute name"
                placeholder="Institute name"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Institution Type</InputLabel>
              <FormSelect name="" placeholder="Institution Type" options={[]} />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Year established"
                placeholder="Year established"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Campus Setting"
                placeholder="Campus Setting"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>

            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Foreign students"
                placeholder="10(%)"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Nationalities"
                placeholder="40"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <InputLabel>Student Population</InputLabel>
              <FormSelect
                name=""
                placeholder="Large (more then 10,000)"
                options={[]}
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Undergraduate Programs"
                placeholder="Undergraduate Programs"
                onChange={() => {}}
                value=""
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Postgraduate Programs"
                placeholder="Postgraduate Programs"
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

export default InstituteOverview;
