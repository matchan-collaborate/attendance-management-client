"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "../atom/Button"
import Link from "next/link"
import { LoginFormData, loginSchema } from "@/schema/userSchema"
import { login } from "@/lib/userFunction"
import { useRouter } from "next/navigation"
import { ErrorMessage } from "../atom/ErrorMessage"
import { FormTextBox } from "../molecules/FormTextBox"

export const LoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  const router = useRouter()

  const onSubmit = async (data: LoginFormData) => {
    const ok = await login(data)
    if (!ok) {
      form.setError("root", { message: "ログインに失敗しました。メールアドレスまたはパスワードをご確認ください。" })
      return
    }
    router.push("/mypage")
  }

  const linkStyle = "text-right text-blue-400 text-sm block mt-1"

  return (
    <Form {...form}>
      <form className="mx-auto my-0 w-3/4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* ここにrootエラーを表示 */}
        <ErrorMessage errorMessage={form.formState.errors.root?.message} />

        <FormTextBox name="email" type="email" form={form} label="メールアドレス" />
        <FormTextBox name="password" type="password" form={form} label="パスワード" />
        <Link href="#" className={linkStyle}>
          パスワードをお忘れですか？
        </Link>
        <Button type="submit" className="mt-8 w-full">
          ログイン
        </Button>
        <Link href="/register" className={linkStyle}>
          新規会員登録はこちらから
        </Link>
      </form>
    </Form>
  )
}
