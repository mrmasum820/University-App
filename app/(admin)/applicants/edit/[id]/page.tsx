"use client";
import dynamic from "next/dynamic";
const ApplicantFormComponent = dynamic(
  () => import("@/components/admin/applicants/form/applicant.form.component"),
  { ssr: false }
);
export default function ApplicantEdit() {
  return <ApplicantFormComponent />;
}
