"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../atom/Button"
import Link from "next/link"

const nameReg = /^[ぁ-んァ-ヶ一-龥a-zA-Z\s]+$/
const registerSchema = z.object({
  name: z
    .string()
    .min(1, "名前を入力してください")
    .trim()
    .regex(nameReg, "使用できるのは日本語（漢字・ひらがな・カタカナ）または英字のみです"),
  email: z.string().email("正しいメールアドレスを入力してください").trim(),
  password: z.string().min(6, "パスワードは6文字以上を入力してください").trim(),
})

type RegisterFormData = z.infer<typeof registerSchema>

export const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues:{name: "",email:"", password:""}
  })

  const onSubmit = (data: RegisterFormData) => {
    console.log(data)
  }

  const linkStyle = "text-right text-blue-400 text-sm block mt-1"

  return (
    <Form {...form}>
      <form className="mx-auto my-0 w-3/4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mt-8">お名前</FormLabel>
              <FormControl>
                <Input className="mt-1" type="name" {...field} />
              </FormControl>
              <FormMessage /> {/* エラー表示 */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mt-8">メールアドレス</FormLabel>
              <FormControl>
                <Input className="mt-1" type="email" {...field} />
              </FormControl>
              <FormMessage /> {/* エラー表示 */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mt-8">パスワード</FormLabel>
              <FormControl>
                <Input className="mt-1" type="password" {...field} />
              </FormControl>
              <FormMessage /> {/* エラー表示 */}
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-8 w-full">
          新規登録
        </Button>
        <Link href="#" className={linkStyle}>
          ログインはこちらから
        </Link>
      </form>
    </Form>
  )
}
