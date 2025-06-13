import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const SettingsComponent = dynamic(
  () => import("@/components/admin/settings/settings.view")
);
export default function Counselor() {
  return (
    <Suspense fallback={<Fragment></Fragment>}>
      <SettingsComponent />
    </Suspense>
  );
}
