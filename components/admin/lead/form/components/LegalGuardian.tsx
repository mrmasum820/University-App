"use client";
import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import Dropdown from "@/uikit/ui/basic/Dropdown";

const incomeOptions = ["Job", "Business"];

const LegalGuardian = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <div className="mt-4">
      <AppCard title="Legal guardian details">
        <div className="p-2 mt-2">
          {/* state / town / country */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/4 mt-3">
              <TextField
                label="Full name"
                placeholder="Full name"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <TextField
                label="Relationship"
                placeholder="Relationship"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <TextField
                label="Occupation"
                placeholder="Occupation"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Income Source
              </h4>
              <Dropdown
                options={incomeOptions}
                label="Select source"
                onSelect={handleSelect}
              />
            </div>
          </div>
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/4 mt-3">
              <TextField
                label="Full name"
                placeholder="Full name"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <TextField
                label="Relationship"
                placeholder="Relationship"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <TextField
                label="Occupation"
                placeholder="Occupation"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Income Source
              </h4>
              <Dropdown
                options={incomeOptions}
                label="Select source"
                onSelect={handleSelect}
              />
            </div>
          </div>
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/4 mt-3">
              <TextField
                label="Full name"
                placeholder="Full name"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <TextField
                label="Relationship"
                placeholder="Relationship"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <TextField
                label="Occupation"
                placeholder="Occupation"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/4 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Income Source
              </h4>
              <Dropdown
                options={incomeOptions}
                label="Select source"
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default LegalGuardian;
