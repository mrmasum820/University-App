"use client";

import { FormTextEditor } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const Curriculum = () => {
  return (
    <div className="mt-4">
      <AppCard title="Curriculum">
        <div className="p-2 mt-2">
          <FormTextEditor name="curriculum" />
        </div>
      </AppCard>
    </div>
  );
};

export default Curriculum;
