"use client";

import ProgramGroupsFormComponent from "./form/programGroups.form.component";
import ProgramGroupsListComponent from "./list/programGroups.list.component";

export default function ProgramGroupsView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <ProgramGroupsFormComponent />
      </div>
      <div className="col-span-8 ">
        <ProgramGroupsListComponent />
      </div>
    </div>
  );
}
