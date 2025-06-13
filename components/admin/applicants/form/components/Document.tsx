"use client";
import {
  Card,
  FormAutoUpload,
  Grid,
  useFormContext
} from "@/uikit/ui";
import { FormCheck } from "@/uikit/ui/form/FormCheck";
import { ApplicantSchemaType } from "../applicant.form.model";

const Document = () => {
  const { form: { watch }} = useFormContext();
  const isCertificate = watch("documents.is_certificate");
  const isPassport = watch("documents.is_passport");
  const isPassportPhoto = watch("documents.is_passport_photo");
  // const isPassportCopy = watch("documents.is_passport_copy");
  // const isImmigrationCard = watch("documents.is_immigration_card");
  // const isNationalId = watch("documents.is_national_id");
  // const isImmigration = watch("documents.is_immigration");
  const isPaymentEmgsFee = watch("documents.is_payment_emgs_fee");
  const isNoc = watch("documents.is_noc");
  const isYellowFever = watch("documents.is_yellow_fever");
  const isPreviousInstutionCertificate = watch("documents.is_previous_instution_certificate");
  const isAttendenceCertificate = watch("documents.is_attendence_certificate");
  const isOrginalReleaseLatter = watch("documents.is_orginal_release_latter");
  const isHealthForm = watch("documents.is_health_form");

  return (
    <Grid.Col className="col-span-12">
      <Card>
        <Card.Header title="Document Checking" />
        <Card.Body>
            <Grid>
              <Grid.Col>
              <h4 className="mb-2 font-semibold text-gray-600"> Do you have any medical condition that needs attention?</h4>
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_certificate"
                  label="1 copy of ALL academic certificate & transcripts"
                />
                {isCertificate && ( <FormAutoUpload<ApplicantSchemaType> name="documents.has_certificate" className="mt-4" /> )}
              </Grid.Col>
              <Grid.Col className="mt-5">
                <h4 className="font-semibold text-gray-600"> Document checklist for International applicants </h4>
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_passport"
                  label="3 copies of passport (all pages in colour) with validity of 24 months (all nationality) or 30 months for Indonesian"
                />
                {isPassport && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_passport" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_passport_photo"
                  label="4 passport size photos (white background)"
                />
                {isPassportPhoto && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_passport_photo" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_health_form"
                  label="Health Declaration Form"
                />
                {isHealthForm && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_health_form" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_payment_emgs_fee"
                  label="Payment of EMGS fee and registration fee"
                />
                {isPaymentEmgsFee && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_payment_emgs_fee" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_noc"
                  label="No Objection Certificate (NOC) for Sudan, No Objection Letter (NOL) for Oman, or Letter of Eligibility (LOE) for Iranian (if applicable)"
                />
                {isNoc && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_noc" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_yellow_fever"
                  label="Copy of yellow fever vaccination card (for students from a country with a risk of yellow fever transmission, or have stayed intransit within these countries for more that 12 hours.)"
                />
                {isYellowFever && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_yellow_fever" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <h4 className="font-semibold text-gray-600"> Additional documents for transfer students (from other institutions) </h4>
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_previous_instution_certificate"
                  label="3 copies of transcripts from previous institution"
                />
                {isPreviousInstutionCertificate && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_previous_instution_certificate" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_attendence_certificate"
                  label="2 copies of attendance report from previous institutions)"
                />
                {isAttendenceCertificate && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_attendence_certificate" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<ApplicantSchemaType>
                  name="documents.is_orginal_release_latter"
                  label="Original release letter"
                />
                {isOrginalReleaseLatter && (<FormAutoUpload<ApplicantSchemaType> name="documents.has_orginal_release_latter" className="mt-4" />)}
              </Grid.Col>
            </Grid>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default Document;
