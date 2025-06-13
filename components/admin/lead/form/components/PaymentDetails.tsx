"use client";

import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import Dropdown from "@/uikit/ui/basic/Dropdown";

const nationalityOptions = ["active", "inactive"];
const visibilityOptions = ["visible", "hidden"];

const PaymentDetails = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <div className="mt-4">
      <AppCard title="PaymentDetails">
        <div className="my-4 mx-2">
          {/* Quotation */}
          <div className="my-2">
            <h4 className="mb-2 font-semibold text-gray-600 text-sm">
              Quotation
            </h4>
            <Dropdown
              options={nationalityOptions}
              label="Select Quotation"
              onSelect={handleSelect}
            />
          </div>
          {/* Payment Process */}
          <div className="my-2">
            <h4 className="mb-2 font-semibold text-gray-600 text-sm">
              Payment Process
            </h4>
            <Dropdown
              options={visibilityOptions}
              label="Select Process"
              onSelect={handleSelect}
            />
          </div>

          {/* Fees */}
          <div className="my-2">
            <TextField
              label="Fees"
              placeholder="10000"
              onChange={() => {}}
              value={""}
            />
          </div>

          {/* Initial Payments */}
          <div className="my-2">
            <TextField
              label="Initial Payments"
              placeholder="2000"
              labelColor="text-green-500"
              className="text-green-500 font-semibold"
              onChange={() => {}}
              value={""}
            />
          </div>

          {/* Due Amount */}
          <div className="my-2">
            <TextField
              label="Due Amount"
              placeholder="8000"
              className="text-red-500 font-semibold"
              labelColor="text-red-500"
              onChange={() => {}}
              value={""}
            />
          </div>

          {/* Total Amount */}
          <div className="my-2">
            <TextField
              label="Total Amount"
              placeholder="10000"
              onChange={() => {}}
              value={""}
            />
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default PaymentDetails;
