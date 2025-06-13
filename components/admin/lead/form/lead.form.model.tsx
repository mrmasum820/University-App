import { z } from "zod";

export const leadSchema = z.object({
  lead_progress: z.object({
    service_id: z.coerce.number().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    email: z.string().nullable(),
    contract_number: z.string().nullable(),
    passport: z.string().nullable(),
    nationality: z.string().nullable(),
    country: z.string().nullable(),
    contract_prefernace: z.string().nullable(),
    gender: z.string().nullable(),
    prefferred_lavel: z.string().nullable(),
    study_destination: z.string().nullable(),
  }),

  lead_verification: z.object({
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
  }),

  lead_payment: z.object({
    subject: z.string().nullable(),
    discount: z.coerce.number().nullable(),
    sub_total: z.coerce.number().nullable(),
    vat: z.coerce.number().nullable(),
    total: z.coerce.number().nullable(),
    paid: z.coerce.number().nullable(),
    due: z.coerce.number().nullable(),
    note: z.string().nullable(),
    fee_items: z.array(
      z.object({
        title: z.coerce.string().nullable(),
        fee_type_id: z.coerce.number().nullable(),
        amount: z.coerce.number().nullable(),
        discount: z.coerce.number().nullable(),
        sub_total: z.coerce.number().nullable(),
        status: z.string().nullable().default("active"),
      })
    ),
    create_by: z.coerce.number().nullable().optional(),
    payment_method: z.string().nullable(),
  }),

  lead_complete: z.object({
    date: z.coerce.date().nullable(),
    created_by: z.coerce.number().nullable(),
    status: z.string().nullable(),
    source_id: z.coerce.number().nullable(),
    agent_id: z.coerce.number().nullable(),
    counselor_id: z.coerce.number().nullable(),
    workflow: z.object({
      workflow_id: z.coerce.number().nullable(),
      workflow_items: z.array(
        z.object({
          workflow_item_id: z.coerce.number().nullable(),
          is_active: z.coerce.boolean().nullable(),
        })
      ),
    }),
    lead_follow_up: z.object({
      is_reminder: z.coerce.boolean().nullable(),
      after_time: z.number().nullable(),
      after_date: z.coerce.date().nullable(),
      follow_via: z.string().nullable(),
      notes: z.string().nullable(),
      created_by: z.coerce.number().nullable().optional(),
    }),
  }),
});

export type LeadSchemaType = z.infer<typeof leadSchema>;
export type FeeItemsType = z.infer<typeof leadSchema.shape.lead_payment.shape.fee_items.element>;

export const leadDefaultValues: LeadSchemaType = {
  lead_progress: {
    service_id: null,
    first_name: "",
    last_name: "",
    email: "",
    contract_number: "",
    passport: "",
    nationality: "",
    country: "",
    contract_prefernace: "",
    gender: "",
    prefferred_lavel: "",
    study_destination: "",
  },
  lead_verification: {
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
  lead_payment: {
    subject: "",
    discount: null,
    sub_total: null,
    vat: null,
    total: null,
    paid: null,
    due: null,
    note: "",
    fee_items: [
      {
        title: "",
        fee_type_id: null,
        amount: null,
        discount: null,
        sub_total: null,
        status: "active",
      },
    ],
    create_by: null,
    payment_method: "",
  },

  lead_complete: {
    date: new Date(),
    created_by: null,
    status: "active",
    source_id: null,
    agent_id: null,
    counselor_id: null,
    workflow: {
      workflow_id: null,
      workflow_items: [{ workflow_item_id: null, is_active: false }],
    },
    lead_follow_up: {
      is_reminder: false,
      after_time: 0,
      after_date: null,
      follow_via: "email",
      notes: "",
      created_by: null,
    },
  },
};

export const leadProcessingValidation = ["lead_progress.service_id"];
