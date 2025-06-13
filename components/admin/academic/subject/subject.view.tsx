"use client";

import SubjectFormComponent from "./form/subject.form.component";
import SubjectListComponent from "./list/subject.list.component";

export default function SubjectView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <SubjectFormComponent />
      </div>
      <div className="col-span-8 ">
        <SubjectListComponent />
      </div>
    </div>
  );
}
