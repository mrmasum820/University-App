import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ServiceCountryComponent = dynamic(
  () =>
    import(
      "@/components/admin/serviceConfiguration/serviceCountries/serviceCountries.component"
    )
);
export default function ServiceCountry() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ServiceCountryComponent />
    </Suspense>
  );
}
