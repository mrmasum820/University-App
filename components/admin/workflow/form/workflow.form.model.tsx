import { z } from "zod";

export const workflowSchema = z.object({
  name: z.string().nonempty({ message: "This filed is required" }),
  description: z.string().nullable(),
  workflow_stages_input: z.string().nullable().optional(),
  workflow_items: z.array(
    z.object({
      name: z.string(),
      status: z.string(),
    })
  ),
});

export type WorkflowSchemaType = z.infer<typeof workflowSchema>;

export const workflowDefaultValues: WorkflowSchemaType = {
  name: "",
  description: "",
  workflow_stages_input: "",
  workflow_items: [
    { name: "", status: "" },
    { name: "", status: "" },
  ],
};
