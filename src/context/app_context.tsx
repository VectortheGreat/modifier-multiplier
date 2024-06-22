"use client"
import { createContext, useContext, useState } from "react"

export type AppContextProps = {
  modifierList: string[]
  setModifierList: (value: string[]) => void
  bannedModifierList: string[]
  setBannedModifierList: (value: string[]) => void
  inputText: string
  setInputText: (value: string) => void
  outputText: string
  setOutputText: (value: string) => void
}

export const appContextDefaultValues: AppContextProps = {
  modifierList: [],
  setModifierList: () => {},
  bannedModifierList: [],
  setBannedModifierList: () => {},
  inputText: "",
  setInputText: () => {},
  outputText: "",
  setOutputText: () => {}
}

const AppContext = createContext(appContextDefaultValues)

export function AppContextProvider(props: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const [modifierList, setModifierList] = useState<string[]>([])
  const [bannedModifierList, setBannedModifierList] = useState<string[]>([])
  const [inputText, setInputText] = useState<string>("")
  const [outputText, setOutputText] = useState<string>("")
  return (
    <AppContext.Provider
      value={{
        ...appContextDefaultValues,
        modifierList,
        setModifierList,
        bannedModifierList,
        setBannedModifierList,
        inputText,
        setInputText,
        outputText,
        setOutputText
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
