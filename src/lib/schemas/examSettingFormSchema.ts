import { z } from 'zod'

export const examSettingFormSchema = z.object({
  title: z.string().min(6).max(32),
  guidelines: z.string().min(8).max(64).optional(),
  classes: z.record(z.string(), z.boolean()),
  // eslint-disable-next-line no-useless-escape
  date: z.string().regex(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
  opening_time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  closing_time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
})

export type ExamSettingFormData = z.infer<typeof examSettingFormSchema>
