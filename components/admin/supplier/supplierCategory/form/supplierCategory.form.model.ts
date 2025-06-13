import { z } from "zod";

export const supplierCategorySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  status: z.string().nullable(),
});

export type SupplierCategorySchemaType = z.infer<typeof supplierCategorySchema>;

export const supplierCategoryDefaultValues: SupplierCategorySchemaType = {
  name: "",
  status: "active",
};
