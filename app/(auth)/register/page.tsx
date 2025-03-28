import { CardTitle } from "@/components/atom/CardTitle"
import { Card } from "@/components/molecules/Card"
import { RegisterForm } from "@/components/organism/RegisterForm"
import { CenterdContainer } from "@/components/templates/CenterdContainer"
import React from "react"

const page = () => {
  return (
    <CenterdContainer>
      <Card className="min-h-[540px]">
        <CardTitle title="新規登録" className="p-6" />
        <RegisterForm />
      </Card>
    </CenterdContainer>
  )
}

export default page
