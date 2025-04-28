"use client"

import React from "react"
import CurrentMonth from "../atom/CurrentMonth"
import tomic from "@/public/tomic.jpg"
import Image from "next/image"
import { LinkButton } from "../atom/LinkButton"
import { GrayLabel } from "../atom/GrayLabel"
import { InfoItem } from "../molecules/InfoItem"
import { TotalWorkHours } from "../atom/TotalWorkHours"
import { TargetWorkHours } from "../atom/TargetWorkHours"
import { RemainingWorkHours } from "../atom/RemainingWorkHours"
import { User } from "@/types/user"

export const MypageList = ({ userData }: { userData: User }) => {
  const { id, name, profile_picture } = userData
  // レスポンスで受け取ったbase64ファイルをjpeg形式に直す
  // const profPicSrc = `data:image/jpeg;base64,${profile_picture}`

  return (
    <>
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
          <InfoItem>
            <GrayLabel>ユーザー名</GrayLabel>
            <p className="text-2xl font-semibold mt-1">{name}</p>
          </InfoItem>
          <InfoItem>
            <GrayLabel>ユーザーID</GrayLabel>
            <p className="text-lg mt-1">{id}</p>
          </InfoItem>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-lg text-gray-700 items-stretch">
        <div className="text-center flex justify-center items-center h-full">
          <InfoItem className="h-full flex flex-col justify-center">
            <CurrentMonth className="text-2xl font-semibold" />
            <GrayLabel className="mt-1">総勤務時間</GrayLabel>
            <TotalWorkHours className="mt-1" />
          </InfoItem>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <InfoItem>
            <GrayLabel className="mt-1">目標勤務時間まで</GrayLabel>
            <RemainingWorkHours />
          </InfoItem>

          <InfoItem>
            <GrayLabel className="mt-1">目標勤務時間</GrayLabel>
            <TargetWorkHours />
          </InfoItem>
        </div>
      </div>

      <div className="flex justify-end mt-6 space-x-4">
        <LinkButton href="#" size="sm">
          ログアウト
        </LinkButton>
        <LinkButton href="#" variant="danger" size="sm">
          退会する
        </LinkButton>
      </div>
    </>
  )
}
