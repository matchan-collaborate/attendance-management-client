"use client"
import { LoginFormData } from "@/components/organism/LoginForm"
import { useRouter } from "next/navigation"

export const loginUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`

export default function useUserFunction() {
  const router = useRouter()
  const login = async (data: LoginFormData) => {
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("ログイン失敗")

      const result = await response.json()
      localStorage.setItem("token", result.token)
      router.push("/mypage")
    } catch (error) {
      console.error("ログインエラー", error)
    }
  }

  return { login }
}
