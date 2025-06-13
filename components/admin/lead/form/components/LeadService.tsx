"use client";
import { ActionDropdown, Card, TextField } from "@/uikit/ui";
const serviceOptions = [
  { id: 1, label: "Malaysia" },
  { id: 2, label: "USA" },
  { id: 3, label: "UK" },
  { id: 4, label: "Australia" },
];

const LeadService = () => {
  return (
    <div className="mb-4">
      <Card>
        <Card.Header title="Lead Service" />
        <Card.Body>
          <div className="p-2">
            {/* serviceConfiguration category / sub category / child category */}
            <div className="md:flex gap-4">
              <div className="md:w-1/3 mt-3">
                <h4 className="mb-2 font-semibold text-gray-600">
                  Service Category
                </h4>
                <ActionDropdown options={serviceOptions} />
              </div>

              <div className="md:w-1/3 mt-3">
                <TextField
                  label="Sub category"
                  placeholder="Select category"
                  onChange={() => {}}
                  value=""
                />
              </div>

              <div className="md:w-1/3 mt-3">
                <TextField
                  label="Select child category"
                  placeholder="Select category"
                  onChange={() => {}}
                  value=""
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeadService;
