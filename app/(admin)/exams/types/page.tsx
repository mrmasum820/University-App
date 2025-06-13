import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ExamTypesComponent = dynamic(
  () => import("@/components/admin/exams/types/examTypes.component")
);
export default function Types() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ExamTypesComponent />
    </Suspense>
  );
}
