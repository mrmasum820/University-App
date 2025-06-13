import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const AttendanceComponent = dynamic(
  () => import("@/components/admin/exams/attendance/attendance.component")
);
export default function Attendance() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <AttendanceComponent />
    </Suspense>
  );
}
