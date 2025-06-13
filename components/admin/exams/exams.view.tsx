"use client";

import ExamsFormComponent from "./form/exams.form.component";
import ExamsListComponent from "./list/exams.list.component";

export default function ExamsView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <ExamsFormComponent />
      </div>
      <div className="col-span-8 ">
        <ExamsListComponent />
      </div>
    </div>
  );
}
