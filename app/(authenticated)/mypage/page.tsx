import { CardTitle } from "@/components/atom/CardTitle"
import { Card } from "@/components/molecules/Card"
import CenterdContainer from "@/components/templates/CenterdContainer"
import React from "react"
import { MypageList } from "@/components/organism/MypageList"
import { getUser } from "@/lib/userFunction"
import { User } from "@/types/user"

export default async function page() {
  // ここでフェッチ
  const user: User = await getUser()

  if (!user) return <div>ロード中</div>

  return (
    <CenterdContainer>
      <Card className="max-w-xl px-6 py-6 min-h-full">
        <CardTitle title="マイページ" />
        <MypageList userData={user} />
      </Card>
    </CenterdContainer>
  )
}
