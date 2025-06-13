"use client"
import dynamic from "next/dynamic";
const LeadFormComponent = dynamic(()=> import("@/components/admin/lead/form/lead.form.component"), {ssr:false});
export default function LeadCreate( ) {
  return (
    <LeadFormComponent />
  )
}