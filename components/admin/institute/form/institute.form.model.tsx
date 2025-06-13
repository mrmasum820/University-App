import { z } from "zod";

export const instituteSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type InstituteSchemaType = z.infer<typeof instituteSchema>;

export const instituteSchemaDefaultValues: InstituteSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  status: "active",
  // image: "",
};
