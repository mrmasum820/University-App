import { TBasicViewProps } from "@/common";
import { useFormContext } from "@/uikit/ui";
import RightSide from "./components/RightSide";
import InstitutionLocation from "./components/InstitutionLocation";
import Admissions from "./components/Admissions";
import { InstituteSchemaType } from "./institute.form.model";
import InstituteOverview from "./components/InstituteOverview";
import InstitutionShortDetails from "./components/InstitutionShortDetails";
import InstitutionDetails from "./components/InstitutionDetails";
import StudentBackground from "./components/StudentBackground";
import EnglishTestScore from "./components/EnglishTestScore";
import TutionFees from "./components/TutionFees";
import LivingCost from "./components/LivingCost";
import Accommodation from "./components/Accommodation";
import Campus from "./components/Campus";
import Mission from "./components/Mission";
import StudentPopulation from "./components/StudentPopulation";

export default function InstituteFormView({}: TBasicViewProps<InstituteSchemaType>) {
  const {
    form: {
      formState: { errors },
    },
  } = useFormContext<InstituteSchemaType>();

  // const triggerAbsolute = useTrigger<ProgramsSchemaType>();
  console.log(errors);

  return (
    <div className="min-h-screen md:flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 bg-gray-100 md:pr-4">
        <h2 className="text-2xl font-semibold p-3 mb-2">Add New Institute</h2>

        {/* course overview */}
        <InstituteOverview />

        <InstitutionShortDetails />

        {/* institution location */}
        <InstitutionLocation />

        <InstitutionDetails />

        <Admissions />

        <StudentBackground />

        <EnglishTestScore />

        <TutionFees />

        <LivingCost />

        <Accommodation />

        <Campus />

        <StudentPopulation />

        <Mission />
      </div>

      <div className="w-full md:w-1/4  p-2 mt-2 md:mt-14">
        <RightSide />
      </div>
    </div>
  );
}
