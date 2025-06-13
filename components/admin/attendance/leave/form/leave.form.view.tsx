import { TBasicViewProps } from "@/common";
import { useFormContext } from "@/uikit/ui";
import { LeaveSchemaType } from "./leave.form.model";

export default function LeaveFormView({}: TBasicViewProps<LeaveSchemaType>) {
  const {
    form: {
      watch,
      formState: { errors },
    },
  } = useFormContext<LeaveSchemaType>();
  console.log(watch());
  console.log("errors", errors);

  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold ">Add New Leave</h2>
      </div>
      {/* <Grid className="gap-6">
        <Grid.Col className="col-span-12 md:col-span-9">
          <Grid className="gap-6">
            <ApplicantsInformation />
            <DisabilityStatus />
            <ParentsInformation />
            <GuardianInformation />
            <EmergencyContact />
            <LegalGuardian />
            <FinancialAssistance />
            <StudentBackground />
            <EnglishTestScore />
            <StudentDeclaration />
            <OfficeUseOnly />
          </Grid>
        </Grid.Col>

        <Grid.Col className="col-span-12 md:col-span-3">
          <RightSide formRef={formRef} />
        </Grid.Col>
      </Grid> */}
    </>
  );
}
