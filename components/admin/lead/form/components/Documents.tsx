"use client";
import {
  Card,
  FormAutoUpload,
  Grid,
  useFormContext
} from "@/uikit/ui";
import { FormCheck } from "@/uikit/ui/form/FormCheck";
import { LeadSchemaType } from "../lead.form.model";

const Documents = () => {
  const { form: { watch }} = useFormContext();
  const isCertificate = watch("lead_verification.is_certificate");
  const isPassport = watch("lead_verification.is_passport");
  const isPassportPhoto = watch("lead_verification.is_passport_photo");
  // const isPassportCopy = watch("lead_verification.is_passport_copy");
  // const isImmigrationCard = watch("lead_verification.is_immigration_card");
  // const isNationalId = watch("lead_verification.is_national_id");
  // const isImmigration = watch("lead_verification.is_immigration");
  const isPaymentEmgsFee = watch("lead_verification.is_payment_emgs_fee");
  const isNoc = watch("lead_verification.is_noc");
  const isYellowFever = watch("lead_verification.is_yellow_fever");
  const isPreviousInstutionCertificate = watch("lead_verification.is_previous_instution_certificate");
  const isAttendenceCertificate = watch("lead_verification.is_attendence_certificate");
  const isOrginalReleaseLatter = watch("lead_verification.is_orginal_release_latter");
  const isHealthForm = watch("lead_verification.is_health_form");

  return (
    <div className="mt-4">
      <Card>
        <Card.Header title="Document Checking" />
        <Card.Body>
      
     

            <Grid>
              <Grid.Col>
              <h4 className="mb-2 font-semibold text-gray-600"> Do you have any medical condition that needs attention?</h4>
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_certificate"
                  label="1 copy of ALL academic certificate & transcripts"
                />
                {isCertificate && ( <FormAutoUpload<LeadSchemaType> name="lead_verification.has_certificate" className="mt-4" /> )}
              </Grid.Col>
              <Grid.Col className="mt-5">
                <h4 className="font-semibold text-gray-600"> Document checklist for International applicants </h4>
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_passport"
                  label="3 copies of passport (all pages in colour) with validity of 24 months (all nationality) or 30 months for Indonesian"
                />
                {isPassport && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_passport" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_passport_photo"
                  label="4 passport size photos (white background)"
                />
                {isPassportPhoto && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_passport_photo" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_health_form"
                  label="Health Declaration Form"
                />
                {isHealthForm && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_health_form" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_payment_emgs_fee"
                  label="Payment of EMGS fee and registration fee"
                />
                {isPaymentEmgsFee && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_payment_emgs_fee" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_noc"
                  label="No Objection Certificate (NOC) for Sudan, No Objection Letter (NOL) for Oman, or Letter of Eligibility (LOE) for Iranian (if applicable)"
                />
                {isNoc && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_noc" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_yellow_fever"
                  label="Copy of yellow fever vaccination card (for students from a country with a risk of yellow fever transmission, or have stayed intransit within these countries for more that 12 hours.)"
                />
                {isYellowFever && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_yellow_fever" className="mt-4" />)}
              </Grid.Col>
     
              {/* 3rd */}
              <Grid.Col>
                <h4 className="font-semibold text-gray-600"> Additional documents for transfer students (from other institutions) </h4>
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_previous_instution_certificate"
                  label="3 copies of transcripts from previous institution"
                />
                {isPreviousInstutionCertificate && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_previous_instution_certificate" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_attendence_certificate"
                  label="2 copies of attendance report from previous institutions)"
                />
                {isAttendenceCertificate && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_attendence_certificate" className="mt-4" />)}
              </Grid.Col>
              <Grid.Col>
                <FormCheck<LeadSchemaType>
                  name="lead_verification.is_orginal_release_latter"
                  label="Original release letter"
                />
                {isOrginalReleaseLatter && (<FormAutoUpload<LeadSchemaType> name="lead_verification.has_orginal_release_latter" className="mt-4" />)}
              </Grid.Col>
            </Grid>

            <div className="mt-4 mx-2">
            {/* <div className="my-3">
              <div className="my-3">
                <Checkbox
                  label="3 copies of passport (all pages in colour) with validity of 24 months (all nationality) or 30 months for Indonesian"
                  id="3copies-passport"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="4 passport size photos (white background)"
                  id="4-passport-size-photos"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="3 copies of ALL acamedic certificates & transcripts (English Translation & Original Language)"
                  id="3copies-academic-certificates"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Health Declaration Form"
                  id="health-declaration-form"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Payment of EMGS fee and registration fee"
                  id="payment-emgs-fee"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="No Objection Certificate (NOC) for Sudan, No Objection Letter (NOL) for Oman, or Letter of Eligibility (LOE) for Iranian (if applicable)"
                  id="noc-nol-loe"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Copy of yellow fever vaccination card (for students from a country with a risk of yellow fever transmission, or have stayed intransit within these countries for more that 12 hours.)"
                  id="yellow-fever-vaccination-card"
                />
              </div>
            </div> */}
{/* 
            <div className="my-3">
              <h4 className="mb-2 font-semibold text-gray-600">
                Additional documents for transfer students (from other
                institutions)
              </h4>
              <div className="my-3">
                <Checkbox
                  label="3 copies of transcripts from previous institution"
                  id="previous-institution-transcripts"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="2 copies of attendance report from previous institutions)"
                  id="attendance-report-previous-institution"
                />
              </div>
              <div className="my-3">
                <Checkbox
                  label="Original release letter"
                  id="original-release-letter"
                />
              </div>
            </div> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Documents;
