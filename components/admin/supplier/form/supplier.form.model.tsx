import { z } from "zod";

export const SupplierSchema = z.object({
  name: z.string(),
  image: z.string().nullable(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  address_second: z.string().nullable(),
  state: z.string().nullable(),
  city: z.string().nullable(),
  zip: z.string().nullable(),
  country: z.string().nullable(),
  note: z.string().nullable(),
  category_id: z.coerce.number().nullable(),
  price: z.coerce.number(),
  currency: z.string().nullable(),
  cost_price: z.coerce.number(),
  selling_price: z.coerce.number(),
  gross_margin: z.coerce.number(),
  net_margin: z.coerce.number(),
  status: z.string(),
});

// TypeScript type inference (optional but useful)
export type SupplierSchemaType = z.infer<typeof SupplierSchema>;

export const supplierDefaultValues: SupplierSchemaType = {
  name: "",
  image: "",
  email: "",
  phone: "",
  address: "",
  address_second: "",
  state: "",
  city: "",
  zip: "",
  country: "",
  note: "",
  category_id: null,
  price: 0,
  currency: "",
  cost_price: 0,
  selling_price: 0,
  gross_margin: 0,
  net_margin: 0,
  status: "active",
};
