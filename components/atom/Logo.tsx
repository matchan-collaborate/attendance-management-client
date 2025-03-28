import Image from "next/image"
import React from "react"
import logo from "@/public/logo2.svg"
import Link from "next/link"

function Logo() {
  return (
    <Link href="#">
      <Image src={logo} width={180} height={180} alt="ses attendance management" />
    </Link>
  )
}

export default Logo
