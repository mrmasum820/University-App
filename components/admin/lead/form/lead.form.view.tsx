import { TBasicViewProps } from "@/common";
import { Stepper } from "@/uikit/ui";
import Documents from "./components/Documents";
import Fees from "./components/Fees";
import LeadDetails from "./components/LeadDetails";
import RightSide from "./components/RightSide";
import { LeadSchemaType } from "./lead.form.model";

export default function LeadFormView({
  formRef,
}: TBasicViewProps<LeadSchemaType>) {

  return (
    <div className="min-h-screen md:flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 bg-gray-100 md:pr-4">
        <h2 className="text-2xl font-semibold p-3 mb-2">Add New Lead</h2>
        <Stepper
          stepperConfig={[
            { name: "Lead Progress" },
            { name: "Lead Verification" },
            { name: "Payment" },
          ]}
          isOnComplete={false}
        >
          <Stepper.Step>
            <LeadDetails />
          </Stepper.Step>
          <Stepper.Step>
            <Documents />
          </Stepper.Step>
          <Stepper.Step>
            <Fees />
          </Stepper.Step>
        </Stepper>
        {/* new interest */}
        {/* <NewInterest /> */}
      </div>

      <div className="w-full md:w-1/4  p-2 mt-2 md:mt-14">
        <RightSide formRef={formRef} />
      </div>
    </div>
  );
}
