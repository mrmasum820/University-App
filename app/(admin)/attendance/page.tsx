import dynamic from "next/dynamic";
import { Suspense } from "react";
const AttendanceComponent = dynamic(
  () => import("@/components/admin/attendance/attendance.component")
);

export default function Lead() {
  return (
    <Suspense fallback={<>Loading</>}>
      <AttendanceComponent />
    </Suspense>
  );
}
