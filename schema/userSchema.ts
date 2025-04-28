import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください").trim(),
  password: z.string().min(4, "パスワードは4文字以上を入力してください").trim(),
})

export type LoginFormData = z.infer<typeof loginSchema>
