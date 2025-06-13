"use client";

import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const StudentPopulation = () => {
  return (
    <div className="mt-4">
      <AppCard title="Student Population">
        <div className="p-2 mt-2">
          <div className="md:flex p-2">
            <div className="md:w-1/3 ">
              <h4 className="font-semibold text-gray-600 mb-2">
                Foreign students
              </h4>
              <p className="bg-gray-100 px-3 py-12">
                {" Large(More than 10000) Total population"}
              </p>
            </div>

            {/* tution / application / visa fee */}
            <div className="md:w-1/3 ml-4">
              <TextField
                label="Undergraduate students"
                placeholder="6000"
                className="mb-2"
                value=""
                onChange={() => {}}
              />
              <TextField
                label="Foreign students"
                placeholder="N/A"
                className="my-2"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="md:w-1/3 ml-4">
              <TextField
                label="Postgraduate students"
                placeholder="1000"
                value=""
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default StudentPopulation;
