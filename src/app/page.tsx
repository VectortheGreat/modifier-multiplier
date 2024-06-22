"use client"

import { useAppContext } from "@/context/app_context"
import { MainPage } from "@/pages/main"

export default function Home() {
  const { token } = useAppContext()
  console.log(token, "token")
  return <MainPage />
}
