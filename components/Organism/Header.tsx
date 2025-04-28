"use client"
import React from "react"
import { Logo } from "../atom/Logo"
import dynamic from "next/dynamic"
import HumbergerMenu from "./HumbergerMenu"

export const Header = () => {
  const CurrentTime = dynamic(() => import("../atom/CurrentTime"), { ssr: false })

  return (
    <>
      <div className="flex justify-between bg-white  p-4">
        <Logo />
        <div className="flex items-center ">
          <CurrentTime className="font-sans font-stretch-75% text-xl" />
          <HumbergerMenu />
        </div>
      </div>
    </>
  )
}
