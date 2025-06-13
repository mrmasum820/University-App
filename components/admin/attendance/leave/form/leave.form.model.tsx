import { z } from "zod";

export const leaveSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type LeaveSchemaType = z.infer<typeof leaveSchema>;

export const leaveSchemaDefaultValues: LeaveSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  status: "active",
  // image: "",
};
