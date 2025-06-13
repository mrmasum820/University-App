"use client";

import AppCard from "@/uikit/ui/basic/AppCard";
import Dropdown from "@/uikit/ui/basic/Dropdown";
import React from "react";

const currencyOptions = ["USD", "EUR", "GBP", "INR"];

const CurrencyFormat = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <div className="mt-4">
      <AppCard title="Currency Format">
        <div className="p-2 mt-2">
          {/* currency format */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/2 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600">
                Currency Format
              </h4>
              <Dropdown
                options={currencyOptions}
                label="1,23,45,678.00"
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default CurrencyFormat;
