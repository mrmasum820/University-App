import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import Dropdown from "@/uikit/ui/basic/Dropdown";
import PrimaryButton from "@/uikit/ui/basic/PrimaryButton";
import TextFieldDate from "@/uikit/ui/basic/TextFieldDate";
import React from "react";

const nationalityOptions = ["active", "inactive"];
const visibilityOptions = ["visible", "hidden"];

const Publish = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <AppCard
      title="Publish"
      rightButton={
        <div className="mr-2">
          <PrimaryButton
            text="Publish"
            bgColor="bg-blue-500"
            onClick={() => {}}
            className="px-8 rounded-lg"
          />
        </div>
      }
    >
      <div className="my-4 mx-2">
        <div className="md: flex">
          <PrimaryButton
            className="mr-2"
            text="Save Draft"
            bgColor="bg-white"
            outlineWidth="outline-1"
            borderColor="border-blue-500"
            textColor="text-blue-500"
            onClick={() => {}}
          />
          <PrimaryButton
            text="Cancel"
            bgColor="bg-red-500"
            onClick={() => {}}
          />
        </div>
        {/* date */}
        <div className="my-2">
          {/* <h4 className="mb-2 font-semibold text-gray-600 text-sm">Date</h4> */}
          <TextFieldDate label="Select Date" onChange={() => {}} />
        </div>
        <div className="my-2">
          <TextField
            label="Publish By"
            placeholder="Shishir"
            onChange={() => {}}
            value={""}
          />
        </div>
        {/* status */}
        <div className="my-2">
          <h4 className="mb-2 font-semibold text-gray-600 text-sm">Status</h4>
          <Dropdown
            options={nationalityOptions}
            label="Select Status"
            onSelect={handleSelect}
          />
        </div>
        <div className="my-2">
          <h4 className="mb-2 font-semibold text-gray-600 text-sm">
            Visibility
          </h4>
          <Dropdown
            options={visibilityOptions}
            label="Select Visibility"
            onSelect={handleSelect}
          />
        </div>
      </div>
    </AppCard>
  );
};

export default Publish;
