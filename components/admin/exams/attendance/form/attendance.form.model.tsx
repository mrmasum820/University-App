import { z } from "zod";

export const examAttendanceSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  date: z.date().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type ExamAttendanceSchemaType = z.infer<typeof examAttendanceSchema>;

export const examAttendanceSchemaDefaultValues: ExamAttendanceSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  date: new Date(),
  status: "active",
  // image: "",
};
