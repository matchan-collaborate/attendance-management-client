"use client"
import { ja } from "date-fns/locale"
import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/tailwindUtils"

const CurrentMonth = ({className}:{className?:string}) => {
  const getCurrentMonth = () => format(new Date(), "yyyy年MM月", { locale: ja })
  const currentMonth = getCurrentMonth()

  return <p className={cn(className)}>{currentMonth}</p>
}

export default CurrentMonth
