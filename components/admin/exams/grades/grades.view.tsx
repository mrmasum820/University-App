"use client";

import GradesFormComponent from "./form/grades.form.component";
import GradesListComponent from "./list/grades.list.component";

export default function GradesView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <GradesFormComponent />
      </div>
      <div className="col-span-8 ">
        <GradesListComponent />
      </div>
    </div>
  );
}
