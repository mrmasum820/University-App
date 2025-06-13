import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const GradesComponent = dynamic(
  () => import("@/components/admin/exams/grades/grades.component")
);
export default function Grades() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <GradesComponent />
    </Suspense>
  );
}
