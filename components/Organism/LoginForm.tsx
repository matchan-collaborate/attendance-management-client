"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../atom/Button"
import Link from "next/link"

const loginSchema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください").trim(),
  password: z.string().min(6, "パスワードは6文字以上を入力してください").trim(),
})

type LoginFormData = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
  }

  const linkStyle = "text-right text-blue-400 text-sm block mt-1"

  return (
    <Form {...form}>
      <form className="mx-auto my-0 w-3/4" onSubmit={form.handleSubmit(onSubmit)}>
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
        <Link href="#" className={linkStyle}>
          パスワードをお忘れですか？
        </Link>
        <Button type="submit" className="mt-8 w-full">
          ログイン
        </Button>
        <Link href="#" className={linkStyle}>
          新規会員登録はこちらから
        </Link>
      </form>
    </Form>
  )
}
