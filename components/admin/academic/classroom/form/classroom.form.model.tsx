import { z } from "zod";

export const classroomSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type ClassroomSchemaType = z.infer<typeof classroomSchema>;

export const classroomSchemaDefaultValues: ClassroomSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  status: "active",
  // image: "",
};
