"use client";

import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

// const nationalityOptions = ["Bangladeshi", "India", "USA", "UK", "Australia"];
// const countryOptions = ["Bangladesh", "Paskista", "USA", "UK", "Australia"];

const ApplicantsInformation = () => {
  // const [selectedOption, setSelectedOption] = useState("option1");
  // const handleRadioChange = (value: string) => {
  //   setSelectedOption(value);
  // };

  // const handleSelect = (option: string) => {
  //   console.log("Selected:", option);
  // };
  return (
    <div className="mt-2">
      <AppCard title="Applicants Information">
        <div className="p-2 mt-2">
          {/* Agency name / Agency code*/}
          <div className="md:flex items-center gap-4">
            <div className="w-1/2 mt-3">
              <TextField
                label="Agency Name"
                placeholder="Agency Name"
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="w-1/2 mt-3">
              <TextField
                label="Agency Code"
                placeholder="Agency Code"
                onChange={() => {}}
                value=""
              />
            </div>
          </div>

          {/* address */}
          <div>
            <div className="mt-3">
              <TextField
                label="Address"
                placeholder="25, Kings road, Dhaka"
                onChange={() => {}}
                value=""
              />
            </div>
          </div>

          {/* phone / email*/}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/2 mt-3">
              <TextField
                label="Phone"
                placeholder="Phone"
                onChange={() => {}}
                value=""
              />
            </div>

            <div className="md:w-1/2 mt-3">
              <TextField
                label="Email"
                placeholder="Email"
                onChange={() => {}}
                value=""
              />
            </div>
          </div>

          {/* nationality / race */}
          {/* <div className="md:flex items-center gap-4">
            <div className="md:w-1/2 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600">Nationality</h4>
              <Dropdown
                options={nationalityOptions}
                label="Select Nationality"
                onSelect={handleSelect}
              />
            </div>

            <div className="md:w-1/2 mt-3">
              <TextField
                label="Race"
                placeholder="race"
                onChange={() => {}}
                value=""
              />
            </div>
          </div> */}

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

export default ApplicantsInformation;
