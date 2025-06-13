"use client";

import AppCard from "@/uikit/ui/basic/AppCard";
import Dropdown from "@/uikit/ui/basic/Dropdown";
import React from "react";

const sessionOptions = ["2023-2024", "2024-2025", "2025-2026", "2026-2027"];
const startMonthOptions = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const AcademicSession = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <div className="mt-4">
      <AppCard title="Academic Session">
        <div className="p-2 mt-2">
          {/* session / start month */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/2 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600">Session</h4>
              <Dropdown
                options={sessionOptions}
                label="2023-2024"
                onSelect={handleSelect}
              />
            </div>

            <div className="md:w-1/2 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600">
                Session Start Month
              </h4>
              <Dropdown
                options={startMonthOptions}
                label="April"
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default AcademicSession;
