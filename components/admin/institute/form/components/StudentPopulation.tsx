"use client";

import { Card, Grid, TextField } from "@/uikit/ui";
import React from "react";

const StudentPopulation = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Student Population" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-4">
              <h4 className="font-semibold text-gray-600 mb-2">
                Foreign students
              </h4>
              <p className="bg-gray-100 px-3 py-12">
                {" Large(More than 10000) Total population"}
              </p>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <Grid>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Undergraduate students"
                    placeholder="6000"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Foreign students"
                    placeholder="N/A"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-4">
              <TextField
                label="Postgraduate students"
                placeholder="1000"
                value=""
                onChange={() => {}}
              />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentPopulation;
