"use client";
import ServiceCountryFormComponent from "./form/serviceCountries.form.component";
import ServiceCountryListComponent from "./list/serviceCountries.list.component";

export default function ServiceCountryView() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6">
        <ServiceCountryFormComponent />
      </div>
      <div className="col-span-6">
        <ServiceCountryListComponent />
      </div>
    </div>
  );
}
