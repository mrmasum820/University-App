import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const EnrollmentComponent = dynamic(
  () => import("@/components/admin/academic/enrollment/enrollment.component")
);
export default function Enrollment() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <EnrollmentComponent />
    </Suspense>
  );
}
