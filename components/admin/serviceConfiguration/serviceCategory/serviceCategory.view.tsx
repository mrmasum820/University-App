"use client";
import ServiceCategoryFormComponent from "./form/serviceCategory.form.component";
import ServiceCategoryListComponent from "./list/serviceCategory.list.component";

export default function ServiceCategoryView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <ServiceCategoryFormComponent />
      </div>
      <div className="col-span-8 ">
        <ServiceCategoryListComponent />
      </div>
    </div>
  );
}
