import type { Metadata } from "next"
import "./globals.css"
import { Header } from "../components/organism/Header"
import { IBM_Plex_Sans_JP } from "next/font/google"
import { cn } from "@/lib/tailwindUtils"

const plex = IBM_Plex_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "SES Attendance Management",
  description: "SESワーカーによる、SESワーカーが月総稼働時間を下回らないための管理アプリ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={cn(plex.className, "bg-sky-100 min-h-screen flex flex-col")}>
        <Header />
        {children}
      </body>
    </html>
  )
}
