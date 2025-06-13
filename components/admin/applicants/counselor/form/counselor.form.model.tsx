import { z } from "zod";

export const counselorSchema = z.object({
  name: z.string().nonempty("This filed is required"),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  image: z.string().nullable(),
  address: z.string().nullable(),
  designation: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  zip_code: z.string().nullable(),
  status: z.string().nullable(),
});

export type CounselorSchemaType = z.infer<typeof counselorSchema>;

export const CounselorDefaultValues: CounselorSchemaType = {
  name: "",
  email: "",
  phone: "",
  image: "",
  address: "",
  designation: "",
  city: "",
  state: "",
  country: "",
  zip_code: "",
  status: "active",
};
