import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ClassroomComponent = dynamic(
  () => import("@/components/admin/academic/classroom/classroom.component")
);
export default function Program() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ClassroomComponent />
    </Suspense>
  );
}
