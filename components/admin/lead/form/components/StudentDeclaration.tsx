"use client";

import AppCard from "@/uikit/ui/basic/AppCard";
import SingleCheckbox from "@/uikit/ui/basic/SingleCheckbox";

const StudentDeclaration = () => {
  //   const handleSelect = (option: string) => {
  //     console.log("Selected:", option);
  //   };
  return (
    <div className="mt-4">
      <AppCard title="Student declaration">
        <div className="p-2 mt-2">
          <p className="text-gray-600">
            I declare that the information provided and documents submitted are
            true and complete. I understand that any misreprentation of
            information may result in Genovasi University College(Genovasi)
            revoking acceptance or terminating my enrolment.
          </p>
          <p className="my-4 text-gray-600">
            I further agree to abide by the Genovasi Code of Conduct and
            understand that Genovasi reserves the right to change policies,
            programs and fees without notice. I understand that my study in
            Genovasi is subject to the approval of my student pass by the
            Malaysian Immigration Department(for international students only).
          </p>
          <p className="mb-2 text-gray-600">
            I hereby fully understood and agreed that all Fees Paid are NOT
            REFUNDABLE upon commencement and enrolment of the above course and
            to be bound by the Team and Conditions of the offer to study at
            Genovasi.
          </p>
        </div>
        <div className="mb-4 ml-2">
          <SingleCheckbox
            label="Are you agree this?"
            value="true"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </AppCard>
    </div>
  );
};

export default StudentDeclaration;
