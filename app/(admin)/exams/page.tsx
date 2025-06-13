import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ExamsComponent = dynamic(
  () => import("@/components/admin/exams/exams.component")
);
export default function Exams() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ExamsComponent />
    </Suspense>
  );
}
