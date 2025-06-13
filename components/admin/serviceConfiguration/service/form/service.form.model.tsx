import { z } from "zod";

export const serviceSchema = z.object({
  title: z.string().min(2, {message:"This filed is required"}),
  category_id: z.coerce.number().nullable(),
  parent_id: z.coerce.number().nullable(),
  child_id: z.coerce.number().nullable(),
  description: z.string().min(2, {message:"This filed is required"}),
  sort_description: z.string().optional(),
  state: z.string().nullable(),
  city: z.string().nullable(),
  country_id: z.coerce.number().nullable(),
  fees: z.array(
    z.object({
      name: z.string().nullable(),
      amount: z.coerce.number().nullable(),
      discount: z.coerce.number().nullable(),
      sub_total: z.coerce.number().nullable(),
      description: z.string().nullable().optional(),
      fee_type_id: z.coerce.number().nullable(),
    })
  ),

  date: z.coerce.date().nullable(),
  create_by: z.coerce.number().nullable(),
  status: z.string().nullable(),
  visibility: z.string().nullable(),
  workflow: z.object({
    workflow_id: z.coerce.number().nullable(),
    workflow_items: z.array(
      z.object({
        workflow_item_id: z.coerce.number().nullable().optional(),
        status: z.string().nullable().optional(),
      })
    ),
  }),
  isPublished: z.boolean().nullable(),
});
// parseInt(value, 10)
export type ServiceSchemaType = z.infer<typeof serviceSchema>;

export type IFeeType = {
  name: string;
  amount: number;
  discount: number;
  sub_total: number;
  description: string;
  fee_type_id: number;
};

const FeeType = [
  {
    name: "",
    amount: null,
    discount: null,
    sub_total: null,
    description: "",
    fee_type_id: null,
  },
];

const WorkflowItem = [
  {
    workflow_item_id: null,
    status: "string",
  },
];

const Workflow = {
  workflow_id: null,
  workflow_items: WorkflowItem,
};

export const serviceDefaultValues: ServiceSchemaType = {
  title: "",
  category_id: null,
  parent_id: null,
  child_id: null,
  description: "",
  sort_description: "",
  state: "",
  city: "",
  country_id: null,
  fees: FeeType,
  date: null,
  create_by: null,
  status: "",
  visibility: "",
  workflow: Workflow,
  isPublished: false,
};
