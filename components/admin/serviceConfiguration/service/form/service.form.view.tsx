import { useParams } from "next/navigation";
import BasicDetails from "./components/BasicDetails";
import CountrySpecific from "./components/CountrySpecific";
import Description from "./components/Description";
import Fees from "./components/Fees";
import RightSide from "./components/RightSide";

export default function ServiceFormView() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="min-h-screen md:flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 bg-gray-100 md:pr-4">
        <h2 className="text-2xl font-semibold p-3 mb-2">{id? 'Edit New Service' :'Add New Service'}</h2>
        {/* basic details */}
        <BasicDetails />
        {/* description */}
        <Description />
        {/* country specific */}
        <CountrySpecific />
        {/* fees*/}
        <Fees />
      </div>

      <div className="w-full md:w-1/4  p-2 mt-2 md:mt-14">
        <RightSide />
      </div>
    </div>
  );
}
