import { z } from "zod";

// program
const applicantCompleteSchema = z.object({
  image: z.string().nullable(),
  application_number: z.string().optional(),
  admission_date: z.coerce.date().nullable().default(new Date()),
  made_of_study: z.string().nullable(),
  made_of_delivery: z.string().nullable(),
  application_status: z.string().nullable(),
  program_id: z.coerce.number().int().nullable(),
});

// Personal Info
const informationSchema = z.object({
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  date_of_birth: z.coerce.date().nullable().default(new Date()),
  email: z.string().nullable().default(""),
  contract_number: z.coerce.string().optional(),
  passport: z.string().nullable(),
  nationality: z.string().nullable(),
  country: z.string().nullable(),
  contract_prefernace: z.string().nullable(),
  gender: z.string().nullable(),
  race: z.string().nullable(),
  religion: z.string().nullable(),
  marital_status: z.string().nullable(),
  address: z.string().nullable(),
  state: z.string().nullable(),
  city: z.string().nullable(),
  zip: z.string().nullable(),
});

// Emergency Contact
const emergencyContactSchema = z.object({
  name: z.string().nullable(),
  relationship: z.string().nullable(),
  contract_number: z.string().nullable(),
  country: z.string().nullable(),
  email: z.string().nullable().default(""),
  address: z.string().nullable(),
  state: z.string().nullable(),
  city: z.string().nullable(),
  zip: z.string().nullable(),
  contract_prefernace: z.string().nullable(),
});

// Legal Guardian
// const parentSchema = z.array(
//   z.object({
//     name: z.string().nullable(),
//     relation: z.string().nullable(),
//     occupation: z.string().nullable(),
//     income: z.string().nullable(),
//   })
// );

// International applicants only
const appicationOnlySchema = z.object({
  application_type: z.string().nullable(),
  note: z.string().nullable(),
  immigration_expiry: z.coerce.date().nullable(),
});

// Student background
const studyBackgroundItemSchema = z.object({
  degree_title: z.string().nullable(),
  degree_level: z.string().nullable(),
  field_of_study: z.string().nullable(),
  institution: z.string().nullable(),
  pass_result: z.string().nullable(),
  start_date: z.coerce.date().nullable(),
  end_date: z.coerce.date().nullable(),
  status: z.string().nullable().optional(),
});

const studyBackgroundSchema = z.object({
  items: z.array(studyBackgroundItemSchema).nullable(),
});

// English Test Score
const englishQualificationsItemSchema = z.object({
  course_name: z.string().nullable(),
  reading_score: z.string().nullable(),
  writing_score: z.string().nullable(),
  speaking_score: z.string().nullable(),
  listening_score: z.string().nullable(),
  total_score: z.string().nullable(),
  status: z.string().nullable().optional(),
});

const englishQualificationsSchema = z.object({
  items: z.array(englishQualificationsItemSchema).nullable(),
});

// Others
const otherSchema = z.object({
  sponsor: z.string().optional(),
  is_medical_condition: z.coerce.boolean().nullable(),
  learn_our_program: z.string().optional(),
});

const documentsSchema = z.object({
  is_certificate: z.coerce.boolean().default(false),
  has_certificate: z.array(z.string()).nullable().default([]),

  is_passport: z.coerce.boolean().nullable(),
  has_passport: z.array(z.string()).nullable().default([]),

  is_passport_photo: z.coerce.boolean().nullable(),
  has_passport_photo: z.array(z.string()).nullable().default([]),

  is_passport_copy: z.coerce.boolean().nullable(),
  has_passport_copy: z.array(z.string()).nullable().default([]),

  is_immigration_card: z.coerce.boolean().nullable(),
  has_immigration_card: z.array(z.string()).nullable().default([]),

  is_national_id: z.coerce.boolean().nullable(),
  has_national_id: z.array(z.string()).nullable().default([]),

  is_immigration: z.coerce.boolean().nullable(),
  has_immigration: z.array(z.string()).nullable().default([]),

  is_payment_emgs_fee: z.coerce.boolean().nullable(),
  has_payment_emgs_fee: z.array(z.string()).nullable().default([]),

  is_noc: z.coerce.boolean().nullable(),
  has_noc: z.array(z.string()).nullable().default([]),

  is_yellow_fever: z.coerce.boolean().nullable(),
  has_yellow_fever: z.array(z.string()).nullable().default([]),

  is_previous_instution_certificate: z.coerce.boolean().nullable(),
  has_previous_instution_certificate: z
    .array(z.string())
    .nullable()
    .default([]),

  is_attendence_certificate: z.coerce.boolean().nullable(),
  has_attendence_certificate: z.array(z.string()).nullable().default([]),

  is_orginal_release_latter: z.coerce.boolean().nullable(),
  has_orginal_release_latter: z.array(z.string()).nullable().default([]),

  is_health_form: z.coerce.boolean().nullable(),
  has_health_form: z.array(z.string()).nullable().default([]),
});

const workflowItemSchema = z.object({
  workflow_item_id: z.coerce.number().int().optional(),
  is_active: z.coerce.boolean().optional(),
});

const workflowSchema = z.object({
  workflow_id: z.coerce.number().int().optional(),
  workflow_items: z.array(workflowItemSchema),
});

const leadCompleteSchema = z.object({
  date: z.string().datetime(),
  created_by: z.coerce.number().int().optional(),
  status: z.string().nullable(),
  source_id: z.coerce.number().int().optional(),
  agent_id: z.coerce.number().int().optional(),
  counselor_id: z.coerce.number().int().optional(),
  workflow: workflowSchema,
});

// Main Schema
export const applicantSchema = z.object({
  lead_id: z.number().int(),
  student_decalration: z.coerce.boolean().optional(),
  notes: z.string().optional(),
  applicant_complete: applicantCompleteSchema,
  information: informationSchema,
  emergency_contact: emergencyContactSchema,
  parents: z.array(
    z.object({
      name: z.string().nullable(),
      relation: z.string().nullable(),
      occupation: z.string().nullable(),
      income: z.string().nullable(),
    })
  ),
  appication_only: appicationOnlySchema,
  study_background: studyBackgroundSchema,
  english_qualifications: englishQualificationsSchema,
  others: otherSchema,
  documents: documentsSchema,
  lead_complete: leadCompleteSchema,
});

export type ApplicantSchemaType = z.infer<typeof applicantSchema>;

export const applicantDefaultValues: ApplicantSchemaType = {
  lead_id: 0,
  student_decalration: false,
  notes: "",
  applicant_complete: {
    image: "",
    application_number: "",
    admission_date: new Date(),
    made_of_study: "",
    made_of_delivery: "",
    application_status: "",
    program_id: 0,
  },

  information: {
    first_name: "",
    last_name: "",
    date_of_birth: null,
    email: "",
    contract_number: undefined,
    passport: "",
    nationality: "",
    country: "",
    contract_prefernace: "",
    gender: "",
    race: "",
    religion: "",
    marital_status: "",
    address: "",
    state: "",
    city: "",
    zip: "",
  },

  emergency_contact: {
    name: "",
    relationship: "",
    email: "",
    country: "",
    contract_number: "",
    contract_prefernace: "",
    address: "",
    state: "",
    city: "",
    zip: "",
  },

  parents: [
    {
      name: "",
      relation: "",
      occupation: "",
      income: "",
    },
  ],

  appication_only: {
    application_type: "",
    note: "",
    immigration_expiry: null,
  },

  study_background: {
    items: [
      {
        degree_title: "",
        degree_level: "",
        field_of_study: "",
        institution: "",
        pass_result: "",
        start_date: new Date(),
        end_date: new Date(),
        status: "active",
      },
    ],
  },

  english_qualifications: {
    items: [
      {
        course_name: "",
        reading_score: "",
        writing_score: "",
        speaking_score: "",
        listening_score: "",
        total_score: "",
        status: "active",
      },
    ],
  },

  others: {
    sponsor: "",
    is_medical_condition: true,
    learn_our_program: "",
  },

  documents: {
    is_certificate: false,
    has_certificate: [],
    is_passport: false,
    has_passport: [],
    is_passport_photo: false,
    has_passport_photo: [],
    is_passport_copy: false,
    has_passport_copy: [],
    is_immigration_card: false,
    has_immigration_card: [],
    is_national_id: false,
    has_national_id: [],
    is_immigration: false,
    has_immigration: [],
    is_payment_emgs_fee: false,
    has_payment_emgs_fee: [],
    is_noc: false,
    has_noc: [],
    is_yellow_fever: false,
    has_yellow_fever: [],
    is_previous_instution_certificate: false,
    has_previous_instution_certificate: [],
    is_attendence_certificate: false,
    has_attendence_certificate: [],
    is_orginal_release_latter: false,
    has_orginal_release_latter: [],
    is_health_form: false,
    has_health_form: [],
  },
  lead_complete: {
    date: new Date().toISOString(),
    created_by: undefined,
    status: "active",
    source_id: undefined,
    agent_id: undefined,
    counselor_id: undefined,
    workflow: {
      workflow_id: undefined,
      workflow_items: [{ workflow_item_id: undefined, is_active: false }],
    },
  },
};
