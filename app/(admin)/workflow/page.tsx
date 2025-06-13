import dynamic from "next/dynamic";
import { Suspense } from "react";

const WorkflowComponent = dynamic(
  () => import("@/components/admin/workflow/workflow.component")
);
const Workflow = () => {
  return (
    <Suspense>
      <WorkflowComponent />
    </Suspense>
  );
};

export default Workflow;
