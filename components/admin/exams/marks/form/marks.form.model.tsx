import { z } from "zod";

export const marksSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  date: z.date().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type MarksSchemaType = z.infer<typeof marksSchema>;

export const marksSchemaDefaultValues: MarksSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  date: new Date(),
  status: "active",
  // image: "",
};
