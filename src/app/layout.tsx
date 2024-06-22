import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Providers } from "@/app/providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modifier Multiplier",
  description:
    "Modifier Multiplier is a tool for calculating the modifier multiplier for a given modifier."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
