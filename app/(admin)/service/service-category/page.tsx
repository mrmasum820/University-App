import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ServiceCategoryComponent = dynamic(
  () =>
    import(
      "@/components/admin/serviceConfiguration/serviceCategory/serviceCategory.component"
    )
);
export default function ServiceCategory() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ServiceCategoryComponent />
    </Suspense>
  );
}
