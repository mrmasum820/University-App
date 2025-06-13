import dynamic from "next/dynamic";
import { Suspense } from "react";
const LeaveComponent = dynamic(
  () => import("@/components/admin/attendance/leave/leave.component")
);

export default function Lead() {
  return (
    <Suspense fallback={<>Loading</>}>
      <LeaveComponent />
    </Suspense>
  );
}
