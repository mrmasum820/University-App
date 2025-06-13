"use client";

import ScheduleFormComponent from "./form/schedule.form.component";
import ScheduleListComponent from "./list/schedule.list.component";

export default function ScheduleView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <ScheduleFormComponent />
      </div>
      <div className="col-span-8 ">
        <ScheduleListComponent />
      </div>
    </div>
  );
}
