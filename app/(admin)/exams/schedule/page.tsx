import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const ScheduleComponent = dynamic(
  () => import("@/components/admin/exams/schedule/schedule.component")
);
export default function Schedule() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <ScheduleComponent />
    </Suspense>
  );
}
