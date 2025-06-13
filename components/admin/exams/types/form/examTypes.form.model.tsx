import { z } from "zod";

export const examTypesSchema = z.object({
  name: z.string().nonempty("This filed is required"),
});

export type ExamTypesSchemaType = z.infer<typeof examTypesSchema>;

export const examTypesSchemaDefaultValues: ExamTypesSchemaType = {
  name: "",
};
