"use client";

import { FormTextEditor } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const Accommodation = () => {
  return (
    <div className="mt-4">
      <AppCard title="Accommodation">
        <div className="p-2 mt-2">
          <FormTextEditor name="entry_requirements" />
        </div>
      </AppCard>
    </div>
  );
};

export default Accommodation;
