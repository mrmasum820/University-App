"use client";
import { Card } from "@/uikit/ui";
import Textarea from "@/uikit/ui/basic/Textarea";

const NewInterest = () => {
  return (
    <div className="mt-4">
      <Card>
        <Card.Body>
          <div>
            <h4 className="mb-2 font-semibold text-gray-600">New Interest</h4>
            <Textarea
              value=""
              onChange={() => {}}
              placeholder="interest for applicant"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewInterest;
