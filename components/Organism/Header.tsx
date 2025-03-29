import React from "react"
import Humbergermenu from "./Humbergermenu"
import {Logo} from "../atom/Logo"
import { CurrentTime } from "../atom/CurrentTime"



export const Header = () => {
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

