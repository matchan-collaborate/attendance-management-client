"use client"

import React, { useState } from "react"

const page = () => {
  const [count, setCount] = useState<number>(0)

  const handlePlus = () => setCount((prev) => prev + 1)
  const handleMinus = () => setCount((prev) => prev - 1)

  return (
    <>
      <div>{count}</div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  )
}

export default page
