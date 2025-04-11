import { CardTitle } from "@/components/atom/CardTitle"
import { Card } from "@/components/molecules/Card"
import CenterdContainer from "@/components/templates/CenterdContainer"
import React from "react"
import { MypageList } from "@/components/organism/MypageList"

export default async function page() {
  return (
    <CenterdContainer>
      <Card className="max-w-xl px-6 py-6 min-h-full">
        <CardTitle title="マイページ" />
        <MypageList />
      </Card>
    </CenterdContainer>
  )
}
