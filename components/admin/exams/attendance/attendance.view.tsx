"use client";

import AttendanceFormComponent from "./form/attendance.form.component";
import AttendanceListComponent from "./list/attendance.list.component";

export default function AttendanceView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <AttendanceFormComponent />
      </div>
      <div className="col-span-8 ">
        <AttendanceListComponent />
      </div>
    </div>
  );
}
