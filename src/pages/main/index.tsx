"use client"

import { useForm } from "react-hook-form"

import Input from "@/components/input"
import { allowedModifiers, bannedModifiers } from "@/lib/modifier_list"

type Inputs = {
  modifiers: string
  bannedModifiers: string
  input: string
}

export const MainPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<Inputs>()
  async function onSubmit(data: Inputs) {
    console.log("data", data)
    const res = await fetch("/api/multiply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: "fasdfasd = -0.9654564" })
    })
    const resdata = await res.json()
    console.log(resdata, "resdata")
  }
  const handleProcess = async () => {
    const res = await fetch("/api/multiply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: "fasdfasd = -0.9654564" })
    })
    console.log(res, "res")
    const response = await fetch("/api/multiply")
    const result = await response.json()
    console.log(result, "result")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex gap-4">
        <Input<Inputs>
          label="Modifier List"
          control={control}
          formName="modifiers"
          defaultValue={allowedModifiers
            .map((modifier) => {
              return modifier
            })
            .join("\n")}
          rows={10}
          {...register("modifiers", { required: true })}
        />
        <Input<Inputs>
          label="Banned Modifier List"
          control={control}
          formName="bannedModifiers"
          defaultValue={bannedModifiers
            .map((modifier) => {
              return modifier
            })
            .join("\n")}
          rows={10}
          {...register("bannedModifiers", { required: true })}
        />
      </div>
      {errors.root && <span>This field is required</span>}
      <Input control={control} formName="input" label="Input" rows={30} />
      <button onClick={handleProcess}>Process</button>
      <button type="submit">Submit</button>
    </form>
  )
}
