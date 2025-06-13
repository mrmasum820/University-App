"use client";

import { Card, Grid, TextField } from "@/uikit/ui";
import Textarea from "@/uikit/ui/basic/Textarea";
import React from "react";

const Fees = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Fees" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-6">
              <Grid>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Local students"
                    placeholder="$24448"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <h4 className="font-semibold text-gray-600 mt-4 mb-2">
                    Note
                  </h4>
                  <Textarea placeholder="Estimated tution fees as reported by the institution" />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-6">
              <Grid>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Tution and Statistics Application fee(local students)"
                    placeholder="Set Fee(local students)"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Application fee(foreign students)"
                    placeholder="Set fee(foreign students)"
                    className="mb-4"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Student visa fee(foreign students)"
                    placeholder="Visa set fee(foreign students)"
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

export default Fees;
