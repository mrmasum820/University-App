"use client";

import AppCard from "@/uikit/ui/basic/AppCard";
import RadioButton from "@/uikit/ui/basic/RadioButton";
import { useState } from "react";

const Others = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  //   const handleSelect = (option: string) => {
  //     console.log("Selected:", option);
  //   };
  return (
    <div className="mt-4">
      <AppCard title="Others">
        <div className="p-2 mt-2">
          <h4 className="mb-2 font-semibold text-gray-600 text-sm">
            Will your course be self-financed or sponsored? Please provide
            details of your sponsor.
          </h4>
          <RadioButton
            name="radio-group"
            options={[
              { label: "Self", value: "self" },
              {
                label: "Organisation / Government sponsor",
                value: "organisation",
              },
            ]}
            selectedValue={selectedOption}
            onChange={handleRadioChange}
          />
        </div>
        <div className="p-2 mt-2">
          <h4 className="mb-2 font-semibold text-gray-600 text-sm">
            Where did you learn our programs?
          </h4>
          <RadioButton
            name="radio-group"
            options={[
              { label: "Advertisement", value: "advertisement" },
              {
                label: "Agent",
                value: "agent",
              },
              { label: "Personal recommendation", value: "recommendation" },
              { label: "Website / Social media", value: "website" },
              { label: "Others", value: "others" },
            ]}
            selectedValue={selectedOption}
            onChange={handleRadioChange}
          />
        </div>
        <div className="p-2 mt-2">
          <h4 className="mb-2 font-semibold text-gray-600 text-sm">
            Do you have any medical condition that needs attention?
          </h4>
          <RadioButton
            isFlex={false}
            name="radio-group"
            options={[
              { label: "Yes. Please provide details:", value: "details" },
              {
                label:
                  "No. I hereby declare that I am physically and mentally fit and there is no other medical condition or disability likely to prevent me or require special attention or care in relation to my study with Genovasi Univerity College(GENOVASI).",
                value: "declare",
              },
            ]}
            selectedValue={selectedOption}
            onChange={handleRadioChange}
          />
        </div>
        <div className="p-2 mt-2">
          <hr className="border-b border-gray-300" />
          <h4 className="my-4 text-gray-600 text-sm">
            Note: - You are required to submit Certified True Copy of Actual
            Academic Results upon admission.
          </h4>
        </div>
      </AppCard>
    </div>
  );
};

export default Others;
