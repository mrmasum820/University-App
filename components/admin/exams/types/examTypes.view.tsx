"use client";

import ExamTypesFormComponent from "./form/examTypes.form.component";
import ExamTypesListComponent from "./list/examTypes.list.component";

export default function ExamTypesView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <ExamTypesFormComponent />
      </div>
      <div className="col-span-8 ">
        <ExamTypesListComponent />
      </div>
    </div>
  );
}
