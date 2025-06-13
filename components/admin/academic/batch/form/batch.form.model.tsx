import { z } from "zod";

export const batchSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  code: z.string().nullable(),
  cadits: z.number().nullable(),
  description: z.string().nullable(),
  date: z.date().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type BatchSchemaType = z.infer<typeof batchSchema>;

export const batchSchemaDefaultValues: BatchSchemaType = {
  name: "",
  code: "",
  cadits: 0,
  description: "",
  date: new Date(),
  status: "active",
  // image: "",
};
