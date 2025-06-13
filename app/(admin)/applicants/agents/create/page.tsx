import {Suspense} from "react";
import dynamic from "next/dynamic";

const AgentsFormComponent = dynamic(() => import("@/components/admin/applicants/agents/form/agents.form.component"))
export default function AgentCreate() {
    return <Suspense fallback={null}>
        <AgentsFormComponent/>
    </Suspense>;
}
