"use client";

import { Card, Grid, TextField } from "@/uikit/ui";
import ButtonGroup from "@/uikit/ui/basic/ButtonGroup";
import React from "react";

const Admissions = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Admissions" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-6">
              <div className="flex items-center bg-gray-100 border border-gray-300 px-3 py-5 min-h-45">
                <ButtonGroup
                  options={[
                    { label: "Jan", value: "january" },
                    { label: "Feb", value: "february" },
                    { label: "Mar", value: "march" },
                    { label: "Apr", value: "april" },
                    { label: "May", value: "may" },
                    { label: "Jun", value: "june" },
                    { label: "Jul", value: "july" },
                    { label: "Aug", value: "august" },
                    { label: "Sep", value: "september" },
                    { label: "Oct", value: "october" },
                    { label: "Nov", value: "november" },
                    { label: "Dec", value: "december" },
                  ]}
                />
              </div>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-6">
              <Grid>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="IELTS"
                    placeholder="Set Score"
                    value=""
                    className="mb-4"
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="TOEFL"
                    placeholder="Set Score"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Admissions;
