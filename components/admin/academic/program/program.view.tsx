"use client";

import ProgramsFormComponent from "./form/program.form.component";
import ProgramsListComponent from "./list/program.list.component";

export default function ProgramsView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <ProgramsFormComponent />
      </div>
      <div className="col-span-8 ">
        <ProgramsListComponent />
      </div>
    </div>
  );
}
