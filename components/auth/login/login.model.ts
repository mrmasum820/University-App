import { z } from "zod"

export const loginSchema = z.object({
  username: z.string().min(2, { message: "Invalid username" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export const loginDefaultValues: LoginSchemaType = {
  username: 'SuperAdmin',
  password: '12345678',
}
