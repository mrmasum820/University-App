import dynamic from "next/dynamic";
import { Suspense } from "react";

const AgentsFormComponent = dynamic(
  () =>
    import("@/components/admin/applicants/agents/form/agents.form.component")
);
export default function AgentEdit() {
  return (
    <Suspense fallback={null}>
      <AgentsFormComponent />
    </Suspense>
  );
}
