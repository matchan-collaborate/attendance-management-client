import { CardTitle } from "@/components/atom/CardTitle"
import { Card } from "@/components/molecules/Card"
import { LoginForm } from "@/components/organism/LoginForm"
import CenterdContainer from "@/components/templates/CenterdContainer"
import React from "react"

export default async function page() {
  return (
    <CenterdContainer>
      <Card className="min-h-[540px]">
        <CardTitle title="ログイン" className="p-6" />
        <LoginForm />
      </Card>
    </CenterdContainer>
  )
}
