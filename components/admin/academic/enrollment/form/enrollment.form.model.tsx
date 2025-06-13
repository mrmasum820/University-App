import { z } from "zod";

export const enrollmentSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  description: z.string().nullable(),
  date: z.date().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type EnrollmentSchemaType = z.infer<typeof enrollmentSchema>;

export const enrollmentSchemaDefaultValues: EnrollmentSchemaType = {
  name: "",
  code: "",
  description: "",
  date: new Date(),
  status: "active",
  // image: "",
};
