"use client";

import AppCard from "@/uikit/ui/basic/AppCard";
import DataTable from "@/uikit/ui/basic/DataTable";
import Dropdown from "@/uikit/ui/basic/Dropdown";
import React from "react";

const categoryOptions = [
  "Flight & Transportation",
  "Accommodation",
  "Tour Packages",
  "Student Travel",
  "Visa & Travel Documentation",
];
const subcategoryOptions = ["Domestic", "International"];
const courseOptions = ["Bachelor", "Master", "Diploma", "Certificate"];

interface EnglishData {
  id: number;
  name: string;
  duration: string;
  fees: string;
}

const CoursesAvailable = () => {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };

  const columns = [
    { key: "id", label: "ID", hidden: true },
    { key: "name", label: "Course Name" },
    { key: "duration", label: "Duration" },
    { key: "fees", label: "Fees" },
  ] as { key: keyof EnglishData; label: string }[];

  const data: EnglishData[] = [
    {
      id: 1,
      name: "Bachelor (Honours) in Finance",
      duration: "3 years",
      fees: "From $2325",
    },
    {
      id: 2,
      name: "BSc (Hons) Financial Analysis",
      duration: "1 year",
      fees: "From $2325",
    },
    {
      id: 3,
      name: "Bachelor (Honours) in Finance",
      duration: "3 years",
      fees: "From $2325",
    },
  ];

  const handleRowClick = (row: EnglishData, index: number) => {
    alert(`Row ${index + 1} clicked! Name: ${row.name}`);
  };

  return (
    <div className="mt-4">
      <AppCard title="Courses Available">
        <div className="p-2">
          {/* select category */}
          <div className="md:flex items-center gap-4">
            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Select Category
              </h4>
              <Dropdown
                options={categoryOptions}
                label="Choose your course"
                onSelect={handleSelect}
              />
            </div>

            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Select sub Category
              </h4>
              <Dropdown
                options={subcategoryOptions}
                label="Choose your course"
                onSelect={handleSelect}
              />
            </div>
            <div className="md:w-1/3 mt-3">
              <h4 className="mb-2 font-semibold text-gray-600 text-sm">
                Select Course
              </h4>
              <Dropdown
                options={courseOptions}
                label="Choose your course"
                onSelect={handleSelect}
              />
            </div>
          </div>

          {/* Bachelor's degree > Bachelor in Accounting & Finance > Accounting & Finance */}

          <div className="mt-6 mb-4">
            <h2 className="text-gray-600 font-semibold">
              {
                "Bachelor's degree > Bachelor in Accounting & Finance > Accounting & Finance"
              }
            </h2>
            <DataTable
              columns={columns}
              data={data}
              onRowClick={handleRowClick}
            />
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default CoursesAvailable;
