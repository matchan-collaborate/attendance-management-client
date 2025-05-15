"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const page = () => {
  const form = useForm()

  const { register, handleSubmit, getValues, setValue } = form
  const [result, setResult] = useState(null)

  form.register

  const fetchData = (data) => {
    console.log(data)
  }

  const handleData = () => {
    const { form1, form2 } = getValues()
    setResult(form1)
  }

  const handleSet = () => {
    setValue("form1", "aaaaaaa")
  }
  return (
    <>
      <input {...register("form1", { minLength: 6 })} className="bg-white" />
      <input {...register("form2", { minLength: 6 })} className="bg-white ml-2" />
      {result && <div>{result}</div>}
      <button onClick={handleSet}>セット</button>
      <button onClick={handleData}>表示</button>
    </>
  )
}

export default page
