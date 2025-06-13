"use client";

import { FormTextEditor } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const Campus = () => {
  return (
    <div className="mt-4">
      <AppCard title="Campus">
        <div className="p-2 mt-2">
          <FormTextEditor name="curriculum" />
        </div>
      </AppCard>
    </div>
  );
};

export default Campus;
