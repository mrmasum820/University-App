"use client";

import { FormTextEditor } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const InstitutionDetails = () => {
  return (
    <div className="mt-4">
      <AppCard title="Institution Short Details">
        <div className="p-2 mt-2">
          <FormTextEditor name="institution_details" />
        </div>
      </AppCard>
    </div>
  );
};

export default InstitutionDetails;
