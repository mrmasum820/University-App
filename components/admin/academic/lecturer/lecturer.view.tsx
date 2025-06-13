"use client";

import LecturerFormComponent from "./form/lecturer.form.component";
import LecturerListComponent from "./list/lecturer.list.component";

export default function LecturerView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <LecturerFormComponent />
      </div>
      <div className="col-span-8 ">
        <LecturerListComponent />
      </div>
    </div>
  );
}
