"use client";
import { Card, TextField } from "@/uikit/ui";

const AdmissionProcess = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Admission Process" />
        <Card.Body>
        <div className="my-4 mx-2">
          <TextField
            label="Staff name"
            placeholder="Staff name"
            onChange={() => {}}
            value={""}
          />
        </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdmissionProcess;
