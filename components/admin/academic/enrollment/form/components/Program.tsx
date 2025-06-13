"use client";

import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import AppImage from "@/uikit/ui/basic/AppImage";
import RadioButton from "@/uikit/ui/basic/RadioButton";
import TextButton from "@/uikit/ui/basic/TextButton";
import TextFieldDate from "@/uikit/ui/basic/TextFieldDate";
import React, { useState } from "react";

const Program = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <>
      {/* program */}
      <div className="mt-4">
        <AppCard title="Programs">
          <div className="p-2 md:flex">
            {/* image field */}
            <div className="w-1/3">
              <AppImage width={250} height={250} className="mx-auto" />
              <div className="mt-2 flex justify-center items-center">
                <TextButton
                  className="cursor-pointer"
                  text="Upload Picture"
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* form fields*/}
            <div className="w-2/3 mt-2 md:mt-0">
              <div className="md:flex justify-center gap-4">
                <div className="md:w-1/2">
                  <TextField
                    label="Application ID"
                    value=""
                    placeholder="Application ID"
                    onChange={() => {}}
                  />
                </div>
                <div className="md:w-1/2">
                  <TextFieldDate
                    label="Proposed Date of Admission"
                    placeholder="select date"
                    onChange={() => {}}
                  />
                </div>
              </div>
              <div className="mt-3">
                <TextField
                  label="Program Name"
                  placeholder="Program Name"
                  onChange={() => {}}
                  value=""
                />
              </div>
              {/* radion button fields */}
              <div className="mt-3">
                <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                  Mode of study
                </h4>
                <RadioButton
                  name="radio-group"
                  options={[
                    { label: "Part Time", value: "parttime" },
                    { label: "Full Time", value: "fulltime" },
                    { label: "Both", value: "both" },
                  ]}
                  selectedValue={selectedOption}
                  onChange={handleRadioChange}
                />
              </div>

              <div className="mt-3">
                <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                  Mode of delivery
                </h4>
                <RadioButton
                  name="radio-group"
                  options={[
                    { label: "Convertional", value: "convertional" },
                    { label: "Online Distance Learning(ODL)", value: "online" },
                  ]}
                  selectedValue={selectedOption}
                  onChange={handleRadioChange}
                />
              </div>

              <div className="mt-3">
                <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                  Application status
                </h4>
                <RadioButton
                  name="radio-group"
                  options={[
                    { label: "New", value: "new" },
                    { label: "Transfer", value: "transfer" },
                    { label: "Modified", value: "modified" },
                  ]}
                  selectedValue={selectedOption}
                  onChange={handleRadioChange}
                />
              </div>
            </div>
          </div>
        </AppCard>
      </div>
    </>
  );
};

export default Program;
