"use client";

import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import MultiCheckbox from "@/uikit/ui/basic/MultiCheckbox";
import TextFieldDate from "@/uikit/ui/basic/TextFieldDate";
import { useState } from "react";

const InternationalApplicants = () => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="mt-4">
      <AppCard title="International applicants only">
        <div className="p-2 mt-2">
          {/* fullname / relationship / occupation */}
          <div className="gap-4">
            <div className="w-full mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                If you have the following pass, please tick
              </h4>
              <MultiCheckbox
                options={[
                  { label: "Malaysian PR", value: "malaysian" },
                  { label: "Student", value: "student" },
                  { label: "Dependent", value: "dependent" },
                  { label: "Diplomatic", value: "diplomatic" },
                  { label: "MM2H", value: "mm2h" },
                  { label: "Work Permit", value: "work" },
                  { label: "Others(Please specify)", value: "others" },
                ]}
                selectedValues={selected}
                onChange={setSelected}
              />
            </div>
            <div className="mt-3">
              <TextField
                placeholder="Others(Please specify)"
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="md:w-1/3 mt-3">
              <TextFieldDate
                label="Immigration pass expiry date"
                selectedDate={null}
                onChange={() => {}}
              />
              <p className="text-sm text-gray-500 mt-1">
                Date must be in YYYY-MM-DD(2012-12-22) format
              </p>
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default InternationalApplicants;
