"use client"
import React from "react"
import Humbergermenu from "./Humbergermenu"
import {Logo} from "../atom/Logo"
import dynamic from "next/dynamic"
// import { CurrentTime } from "../atom/CurrentTime"



export const Header = () => {

  const CurrentTime = dynamic(() => import("../atom/CurrentTime"),{ssr: false})

  return (
    <>
      <div className="flex justify-between bg-white  p-4">
        <Logo />
        <div className="flex items-center ">
          <CurrentTime />
          <Humbergermenu />
        </div>
      </div>
    </>
  )
}

