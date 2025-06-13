import { z } from "zod";

export const programGroupsSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type ProgramGroupsSchemaType = z.infer<typeof programGroupsSchema>;

export const programGroupsSchemaDefaultValues: ProgramGroupsSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  status: "active",
  // image: "",
};
