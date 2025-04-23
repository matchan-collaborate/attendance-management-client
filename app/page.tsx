// あとでサーバーコンポーネントに戻す
"use client"

import useAuth from "@/hooks/useAuth"
import { redirect, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { user, loading } = useAuth()
  // if (!user) redirect("/login")
  // if (user) redirect("/mypage")
  // if (loading) return <div>ロード中</div>

  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [loading, user, router])

  // ローディング中やリダイレクト中は何も表示しない
  if (loading || !user) return null

  if (user) router.push("/mypage")
}
