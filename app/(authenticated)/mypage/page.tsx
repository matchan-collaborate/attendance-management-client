import { CardTitle } from "@/components/atom/CardTitle"
import { Card } from "@/components/molecules/Card"
import { CenterdContainer } from "@/components/templates/CenterdContainer"
import Image from "next/image"
import React from "react"
import tomic from "@/public/tomic.jpg"
import Link from "next/link"

const page = () => {
  return (
    <CenterdContainer>
      <Card className="max-w-xl px-6 py-6 min-h-full">
        <CardTitle title="マイページ" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* プロフィール（左：画像） */}
          <div className="flex flex-col items-center justify-start gap-6">
            <Image
              src={tomic}
              width={200}
              height={200}
              alt="プロフィール画像"
              className="rounded-full object-cover aspect-square shadow-md"
            />
          </div>

          {/* プロフィール（右：情報） */}
          <div className="flex flex-col gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-sm shadow-sm">
              <p className="text-gray-500">ユーザー名</p>
              <p className="text-2xl font-semibold">テスト太郎</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm shadow-sm">
              <p className="text-gray-500">ユーザーID</p>
              <p className="text-lg">abcde12345</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-lg text-gray-700 items-stretch">
          <div className="text-center flex justify-center items-center h-full">
            <div className="bg-gray-50 p-4 rounded-sm shadow-sm h-full flex flex-col justify-center">
              <p className="text-2xl">2025年03月</p>
              <p className="mt-1">総勤務時間</p>
              <p className="text-4xl font-bold mt-1">100:00:00</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-sm shadow-sm">
              <p className="text-gray-700">目標勤務時間まで</p>
              <p className="text-red-500 text-4xl font-bold">40:00:00</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm shadow-sm">
              <p className="text-gray-700">目標勤務時間</p>
              <p className="text-2xl font-bold">140:00:00</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <Link
            href="/logout"
            className="bg-sky-500 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded"
          >
            ログアウト
          </Link>
          <Link href="/logout" className="bg-rose-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
            退会する
          </Link>
        </div>
      </Card>
    </CenterdContainer>
  )
}

export default page
