"use client"
import { ja } from "date-fns/locale"
import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/tailwindUtils"

// 基本的にダイナミックインポートする想定
const CurrentTime = ({className}: {className?:string}) => {
  const getCurrentTime = () => format(new Date(), "yyyy年MM月dd日（E）HH:mm:ss", { locale: ja })
  const [cunrrentTime, setCurrentTime] = useState(getCurrentTime())

  useEffect(() => {
    const updateDateTime = () => setCurrentTime(getCurrentTime())
    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return <p className={cn(className,"mr-4")}>{cunrrentTime}</p>
}

export default CurrentTime
