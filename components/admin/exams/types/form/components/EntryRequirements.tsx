"use client";

import { FormTextEditor } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const EntryRequirements = () => {
  return (
    <div className="mt-4">
      <AppCard title="Entry Requirements">
        <div className="p-2 mt-2">
          <FormTextEditor name="entry_requirements" />
        </div>
      </AppCard>
    </div>
  );
};

export default EntryRequirements;
