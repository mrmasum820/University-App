"use client";

import { Card, FormTextEditor, Grid } from "@/uikit/ui";
import React from "react";

const CourseDetails = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Course Details" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-12">
              <FormTextEditor name="course_details" />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
