"use client";

import { Card, Grid, TextField } from "@/uikit/ui";
import Textarea from "@/uikit/ui/basic/Textarea";
import React from "react";

const LivingCost = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Living Cost" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-6">
              <Grid>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Living Cost"
                    placeholder="$448 per month"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <h4 className="font-semibold text-gray-600 mt-4 mb-2">
                    Note
                  </h4>
                  <Textarea
                    placeholder="Average Living cost in Malaysia
                    The amount is indicated taking into account the average living cost in Malaysia for 2024."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-6">
              <Grid>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Food"
                    placeholder="Food Cost"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Accommodation"
                    placeholder="Accommodation Cost"
                    className="mb-4"
                    value=""
                    onChange={() => {}}
                  />
                </Grid.Col>
                <Grid.Col className="col-span-12 md:col-span-12">
                  <TextField
                    label="Others"
                    placeholder="Others"
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

export default LivingCost;
