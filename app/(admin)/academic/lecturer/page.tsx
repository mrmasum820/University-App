import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const LecturerComponent = dynamic(
  () => import("@/components/admin/academic/lecturer/lecturer.component")
);
export default function Program() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <LecturerComponent />
    </Suspense>
  );
}
