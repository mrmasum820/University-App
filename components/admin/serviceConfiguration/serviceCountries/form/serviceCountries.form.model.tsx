import { z } from "zod";

export const ServiceCountrychema = z.object({
  name: z.string().min(2, { message: "Title must be at least 2 characters" }),
  roules: z.string().nullable(),
  status: z.string().nullable(),
});

export type ServiceCountrySchemaType = z.infer<typeof ServiceCountrychema>;

export const serviceCountryDefaultValues: ServiceCountrySchemaType = {
  name: "",
  roules: "",
  status: "actice",
};
