"use client"

import { AppContextProvider } from "@/context/app_context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <AppContextProvider>{children}</AppContextProvider>
    </div>
  )
}
