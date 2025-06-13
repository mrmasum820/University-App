import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  image: z.string().nullable(),
  passport_or_nid: z.string().nullable(),
  nationality: z.number().nullable(),
  gender: z.string().min(1, { message: "This filed is required" }),
  isForigner: z.boolean().nullable(),
  role_id: z.number().nullable(),
  department_id: z.number().nullable(),
  status: z.string().nullable(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  is_active: z.boolean().default(true),
  is_superuser: z.boolean().default(false),
});

export type UserSchemaType = z.infer<typeof userSchema>;

export const userDefaultValues: UserSchemaType = {
  username: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  image: "",
  passport_or_nid: "",
  nationality: 0,
  gender: "",
  isForigner: false,
  role_id: 0,
  department_id: 0,
  status: "",
  password: "",
  is_active: false,
  is_superuser: false,
};
