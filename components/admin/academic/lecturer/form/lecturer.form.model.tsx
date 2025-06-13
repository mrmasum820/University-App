import { z } from "zod";

export const lecturerSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  description: z.string().nullable(),
  date: z.date().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type LecturerSchemaType = z.infer<typeof lecturerSchema>;

export const lecturerSchemaDefaultValues: LecturerSchemaType = {
  name: "",
  code: "",
  description: "",
  date: new Date(),
  status: "active",
  // image: "",
};
