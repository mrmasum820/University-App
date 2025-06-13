"use client";

import { TextField } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import Textarea from "@/uikit/ui/basic/Textarea";
import React from "react";

const ApplicationFees = () => {
  //   const handleSelect = (option: string) => {
  //     console.log("Selected:", option);
  //   };
  return (
    <div className="mt-4">
      <AppCard title="Tution and Application Fees">
        <div className="p-2 mt-2">
          <div className="md:flex p-2">
            <div className="md:w-1/2 ">
              <h4 className="font-semibold text-gray-600 mb-2">Tution Fees</h4>
              <p className="bg-gray-100 px-3 py-5">
                {" "}
                From $2242 to $26905 per year
              </p>

              <h4 className="font-semibold text-gray-600 mt-4 mb-2">Note</h4>
              <Textarea placeholder="Estimated tution fees as reported by the institution" />
            </div>

            {/* tution / application / visa fee */}
            <div className="md:w-1/2 ml-4">
              <TextField
                label="Tution and Statistics Application fee(local students)"
                placeholder="Set fee(local students)"
                className="mb-2"
                value=""
                onChange={() => {}}
              />
              <TextField
                label="Application fee(foreign students)"
                placeholder="Set fee(foreign students)"
                className="my-2"
                value=""
                onChange={() => {}}
              />
              <TextField
                label="Student visa fee fee(foreign students)"
                placeholder="Visa Set fee(foreign students)"
                className="my-2"
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

export default ApplicationFees;
