"use client";

import { Card, FormDateInput, FormTextField, Grid } from "@/uikit/ui";
import { FormCheck } from "@/uikit/ui/form/FormCheck";

const StudentDeclaration = () => {
  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Student Declaration" />
        <Card.Body>
          <Grid>
            <Grid.Col className="col-span-12 md:col-span-12">
              <p className="text-gray-600">
                I confirm that, to the best of my knowledge, the information
                given in this form is correct and complete. I authorise Oxford
                Asia College to make enquiries about the details associated with
                this application. I understand that giving false information
                will make me ineligible for admission. I also agree with all the
                terms and conditions of Oxford Asia College.
              </p>
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-12">
              <FormCheck
                name=""
                label="Are you agree this?"
                id="is_trams_condition_agreed"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-6">
              <FormTextField
                name=""
                label="Applicant's Signature"
                placeholder="Signature"
              />
            </Grid.Col>
            <Grid.Col className="col-span-12 md:col-span-6">
              <FormDateInput name="" label="Date" placeholder="Date" />
            </Grid.Col>
          </Grid>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default StudentDeclaration;
