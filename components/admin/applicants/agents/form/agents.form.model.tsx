import { z } from "zod";

export const agentsSchema = z.object({
  connselor_id: z.coerce.number().nullable(),
  image: z.string().nullable(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  company: z.string().nullable(),
  address: z.string().nullable(),
  country: z.string().nullable(),
  city: z.string().nullable(),
  is_marketer: z.boolean().nullable(),
  status: z.coerce.string().nullable(),
});

export type AgentsSchemaType = z.infer<typeof agentsSchema>;

export const agentsDefaultValues: AgentsSchemaType = {
  connselor_id: null,
  image: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  address: "",
  country: "",
  city: "",
  is_marketer: false,
  status: "active",
};
