import {Suspense} from "react";
import dynamic from "next/dynamic";

const AgentsComponent = dynamic(() => import("@/components/admin/applicants/agents/agents.component"))
export default function Agent() {
    return <Suspense fallback={null}>
        <AgentsComponent/>
    </Suspense>;
}
