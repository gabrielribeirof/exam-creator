import { z } from 'zod'

export const classFormSchema = z.object({
  title: z.string().min(6).max(32),
  users: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string().email()
      })
    )
    .min(1)
    .max(64)
})

export type ClassFormSchema = z.infer<typeof classFormSchema>
