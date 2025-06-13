import { z } from "zod";

export const serviceCategorySchema = z.object({
  title: z.string().nonempty("This filed is required"),
  slug: z.string().nullable(),
  parent_id: z.number().nullable(),
  description: z.string().nullable(),
  // image: z.string().nullable(),
  status: z.string().nullable(),
});

export type ServiceCategorySchemaType = z.infer<typeof serviceCategorySchema>;

export const serviceCategoryDefaultValues: ServiceCategorySchemaType = {
  title: "",
  slug: "",
  parent_id: null,
  description: "",
  status: "active",
  // image: "",
};
