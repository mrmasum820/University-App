"use client";

import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import Dropdown from "@/uikit/ui/basic/Dropdown";
import TextFieldDate from "@/uikit/ui/basic/TextFieldDate";
import React from "react";

const dayOfWeekOptions = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const DateTime = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <div className="mt-4">
      <AppCard title="Date Time">
        <div className="p-2 mt-2">
          {/* nationality / race */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/3 mt-3">
              <TextFieldDate
                label="Date Format"
                placeholder="mm/dd/yyyy"
                onChange={() => {}}
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <TextField
                label="Timezone"
                placeholder="(GMT+06:00) Asia"
                value=""
                onChange={() => {}}
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600">
                Start Day of Week
              </h4>
              <Dropdown
                options={dayOfWeekOptions}
                label="Monday"
                onSelect={handleSelect}
              />
            </div>
          </div>

          {/* date of birth / religion */}
          {/* <div className="md:flex items-center gap-4">
            <div className="md:w-1/2 mt-3">
              <TextFieldDate
                label="Date of birth"
                placeholder="Date of birth"
                onChange={() => {}}
              />
            </div>

            <div className="md:w-1/2 mt-3">
              <TextField
                label="Religion"
                placeholder="religion"
                onChange={() => {}}
                value=""
              />
            </div>
          </div> */}

          {/* gender / matrital status */}
          {/* <div className="md:flex items-center gap-4">
            <div className="md:w-1/2 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600">Gender</h4>
              <RadioButton
                name="radio-group"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                selectedValue={selectedOption}
                onChange={handleRadioChange}
              />
            </div>

            <div className="md:w-1/2 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600">
                Marital Status
              </h4>
              <RadioButton
                name="radio-group"
                options={[
                  { label: "Single", value: "single" },
                  { label: "Married", value: "married" },
                ]}
                selectedValue={selectedOption}
                onChange={handleRadioChange}
              />
            </div>
          </div> */}
        </div>
      </AppCard>
    </div>
  );
};

export default DateTime;
