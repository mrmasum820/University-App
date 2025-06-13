"use client";

import ClassroomFormComponent from "./form/classroom.form.component";
import ClassroomListComponent from "./list/classroom.list.component";

export default function ClassroomView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <ClassroomFormComponent />
      </div>
      <div className="col-span-8 ">
        <ClassroomListComponent />
      </div>
    </div>
  );
}
