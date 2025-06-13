import { TBasicViewProps } from "@/common";
import { Grid, useFormContext } from "@/uikit/ui";
import { ApplicantSchemaType } from "./applicant.form.model";
import EmergencyContact from "./components/EmergencyContact";
import EnglishTestScore from "./components/EnglishTestScore";
import LegalGuardian from "./components/LegalGuardian";
import RightSide from "./components/RightSide";
import StudentBackground from "./components/StudentBackground";
import StudentDeclaration from "./components/StudentDeclaration";
import ApplicantsInformation from "./components/ApplicantsInformation";
import DisabilityStatus from "./components/DisabilityStatus";
import ParentsInformation from "./components/ParentsInformation";
import GuardianInformation from "./components/GuardianInformation";
import FinancialAssistance from "./components/FinancialAssistance";
import OfficeUseOnly from "./components/OfficeUseOnly";

export default function ApplicantFormView({
  formRef,
}: TBasicViewProps<ApplicantSchemaType>) {
  const {
    form: {
      watch,
      formState: { errors },
    },
  } = useFormContext<ApplicantSchemaType>();
  console.log(watch());
  console.log("errors", errors);

  return (
    <>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold ">Add New Applicant</h2>
      </div>
      <Grid className="gap-6">
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
      </Grid>
    </>
  );
}
