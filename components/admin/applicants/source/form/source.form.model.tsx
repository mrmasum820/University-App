import { z } from "zod";

export const sourceSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  status: z.string().nullable(),
});

export type SourceSchemaType = z.infer<typeof sourceSchema>;

export const sourceDefaultValues: SourceSchemaType = {
  name: "",
  status: "active",
};
