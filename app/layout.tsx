import type { Metadata } from "next"
import "./globals.css"
import Header from "../components/organism/Header"

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
      <body className="bg-sky-100 min-h-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  )
}
