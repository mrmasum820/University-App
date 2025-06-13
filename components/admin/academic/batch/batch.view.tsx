"use client";

import BatchFormComponent from "./form/batch.form.component";
import BatchListComponent from "./list/batch.list.component";

export default function BatchView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <BatchFormComponent />
      </div>
      <div className="col-span-8 ">
        <BatchListComponent />
      </div>
    </div>
  );
}
