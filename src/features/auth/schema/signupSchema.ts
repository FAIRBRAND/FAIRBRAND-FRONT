import { z } from 'zod'

export const signupSchema = z
  .object({
    firstname: z.string().min(2),
    lastname: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
  })

export type SignupFormData = z.infer<typeof signupSchema>
