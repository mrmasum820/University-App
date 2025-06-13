"use client";

import { Card, FormRadio, Grid } from "@/uikit/ui";
import InputLabel from "@/uikit/ui/basic/InputLabel";
import { ApplicantSchemaType } from "../applicant.form.model";

const Others = () => {

  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Others" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-12">
              <InputLabel className="mb-2 font-semibold text-gray-600">
                Will your course be self-financed or sponsored? Please provide
                details of your sponsor.
              </InputLabel>
              <FormRadio<ApplicantSchemaType>
                name="others.sponsor"
                options={[
                  { label: "Self", value: "self" },
                  {
                    label: "Organisation / Government sponsor",
                    value: "organisation",
                  },
                ]}
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-12">
              <InputLabel className="mb-2 font-semibold text-gray-600 text-sm">
                Where did you learn our programs?
              </InputLabel>
              <FormRadio<ApplicantSchemaType>
                name="others.learn_our_program"
                options={[
                  { label: "Advertisement", value: "advertisement" },
                  {
                    label: "Agent",
                    value: "agent",
                  },
                  { label: "Personal recommendation", value: "recommendation" },
                  { label: "Website / Social media", value: "website" },
                  { label: "Others", value: "others" },
                ]}
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-12">
              <InputLabel className="mb-2 font-semibold text-gray-600 text-sm">
                Do you have any medical condition that needs attention?
              </InputLabel>
              <FormRadio<ApplicantSchemaType>
                name="others.is_medical_condition"
                isFlex={false}
                className="basis-[4%]"
                options={[
                  { label: "Yes. Please provide details:", value: "details" },
                  {
                    label:
                      "No. I hereby declare that I am physically and mentally fit and there is no other medical condition or disability likely to prevent me or require special attention or care in relation to my study with Genovasi Univerity College(GENOVASI).",
                    value: "declare",
                  },
                ]}
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-12">
              <hr className="border-b border-gray-300" />
              <h4 className="my-4 text-gray-600 text-sm">
                Note: - You are required to submit Certified True Copy of Actual
                Academic Results upon admission.
              </h4>
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default Others;
