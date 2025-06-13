"use client";

import EnrollmentFormComponent from "./form/enrollment.form.component";
import EnrollmentListComponent from "./list/enrollment.list.component";

export default function EnrollmentView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <EnrollmentFormComponent />
      </div>
      <div className="col-span-8 ">
        <EnrollmentListComponent />
      </div>
    </div>
  );
}
