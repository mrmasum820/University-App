"use client";

import { Card, FormTextEditor } from "@/uikit/ui";

const ShortDescription = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Short Description" />
        <Card.Body>
          <div className="my-4 mx-2">
            <FormTextEditor
              name="short_description"
              placeholder="Enter short description"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShortDescription;
