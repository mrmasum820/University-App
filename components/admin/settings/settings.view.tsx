"use client";

import AcademicSession from "./components/AcademicSession";
import ApplicantsInformation from "./components/ApplicantsInformation";
import CurrencyFormat from "./components/CurrencyFormat";
import DateTime from "./components/DateTime";
import LeftSidebar from "./components/LeftSidebar";

export default function SettingsView() {
  return (
    <div className="md:flex flex-col md:flex-row">
      {/* Right Section (3/4 width) */}
      <div className="md:w-1/4  p-2 mt-2 md:mt-14">
        <LeftSidebar />
      </div>

      {/* Left Section (1/4 width) */}
      <div className="md:w-3/4 bg-gray-100 md:pr-4">
        {/* applicant info */}
        <ApplicantsInformation />

        {/* academic session */}
        <AcademicSession />

        {/* date time */}
        <DateTime />

        {/* currency format */}
        <CurrencyFormat />
      </div>
    </div>
  );
}
