import { z } from "zod";

export const attendanceSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type AttendanceSchemaType = z.infer<typeof attendanceSchema>;

export const attendanceSchemaDefaultValues: AttendanceSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  status: "active",
  // image: "",
};
