// クッキー認証できてないからクライアントコンポーネント
"use client"
import { CardTitle } from "@/components/atom/CardTitle"
import { Card } from "@/components/molecules/Card"
import CenterdContainer from "@/components/templates/CenterdContainer"
import React, { useEffect } from "react"
import { MypageList } from "@/components/organism/MypageList"
import useAuth from "@/hooks/useAuth"
import { redirect, useRouter } from "next/navigation"

export default function page() {
  const { user, loading } = useAuth()
  // あとで削除
  const router = useRouter()

  // if (!user) {
  //   router.push("/login")
  // }

  // if (loading) return <div>ロード中</div>

  // 仮置き
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login")
      } else {
        router.push("/mypage")
      }
    }
  }, [loading, user, router])
  // ローディング中やリダイレクト中は何も表示しない
  if (loading || !user) return null

  return (
    <CenterdContainer>
      <Card className="max-w-xl px-6 py-6 min-h-full">
        <CardTitle title="マイページ" />
        <MypageList userData={user}/>
      </Card>
    </CenterdContainer>
  )
}
