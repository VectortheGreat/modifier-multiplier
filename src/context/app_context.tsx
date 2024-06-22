"use client"
import { createContext, useContext, useState } from "react"

export type AppContextProps = {
  token?: string
}

export const appContextDefaultValues: AppContextProps = {}

const AppContext = createContext(appContextDefaultValues)

export function AppContextProvider(props: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const [token] = useState<AppContextProps["token"]>("TEST")
  return (
    <AppContext.Provider
      value={{
        ...appContextDefaultValues,
        token
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("App Context Error")
  }
  return context
}
