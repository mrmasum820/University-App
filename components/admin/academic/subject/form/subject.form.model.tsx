import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  subject_code: z.string().nullable(),
  description: z.string().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type SubjectSchemaType = z.infer<typeof subjectSchema>;

export const subjectSchemaDefaultValues: SubjectSchemaType = {
  name: "",
  subject_code: "",
  description: "",
  status: "active",
  // image: "",
};
