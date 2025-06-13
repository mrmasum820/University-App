"use client";
import React from "react";
import AgentsListComponent from "./list/agents.list.component";
import AgentsFormComponent from "./form/agents.form.component";

export default function AgentsView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <AgentsFormComponent />
      </div>
      <div className="col-span-8 ">
        <AgentsListComponent />
      </div>
    </div>
  );
}
