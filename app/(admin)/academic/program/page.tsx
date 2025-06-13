import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ProgramsComponent = dynamic(
  () => import("@/components/admin/academic/program/program.component")
);
export default function Program() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ProgramsComponent />
    </Suspense>
  );
}
