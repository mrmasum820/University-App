"use client";

import { FormTextEditor } from "@/uikit/ui";
import AppCard from "@/uikit/ui/basic/AppCard";
import React from "react";

const Mission = () => {
  return (
    <div className="mt-4">
      <AppCard title="Mission">
        <div className="p-2 mt-2">
          <FormTextEditor name="mission" />
        </div>
      </AppCard>
    </div>
  );
};

export default Mission;
