import dynamic from "next/dynamic";
import { Suspense } from "react";
const LeadComponent = dynamic(
  () => import("@/components/admin/lead/lead.component")
);

export default function Lead() {
  return (
    <Suspense fallback={<>Loading</>}>
      <LeadComponent />
    </Suspense>
  );
}
