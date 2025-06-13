"use client";

import CounselorFormComponent from "./form/counselor.form.component";
import CounselorListComponent from "./list/counselor.list.component";

export default function CounselorView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <CounselorFormComponent />
      </div>
      <div className="col-span-8 ">
        <CounselorListComponent />
      </div>
    </div>
  );
}
