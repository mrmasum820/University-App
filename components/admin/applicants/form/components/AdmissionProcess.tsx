"use client";

import { Card, TextField } from "@/uikit/ui";
import React from "react";

const AdmissionProcess = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Admission Process" />
        <Card.Body>
          <TextField
            label="Staff name"
            placeholder="Staff name"
            onChange={() => {}}
            value={""}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdmissionProcess;
