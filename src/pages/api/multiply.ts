import { allowedModifiers, bannedModifiers } from "@/lib/modifier_list"
//@ts-ignore
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" })
  }

  const { content } = req.body

  const lines = content.split("\n")

  const newContent = lines.map((line: string) => {
    const commentIndex = line.indexOf("#")
    if (commentIndex === 0) {
      return ""
    } else if (commentIndex > 0) {
      line = line.substring(0, commentIndex).trim()
    } else {
      line = line.trim()
    }

    if (line === "") {
      return ""
    }

    const containsAllowedWord = allowedModifiers.some((word) => {
      return line.indexOf(word) !== -1
    })

    const containsBannedWord = bannedModifiers.some((word) => {
      return line.indexOf(word) !== -1
    })

    if (containsBannedWord) {
      return line
    }

    if (containsAllowedWord) {
      const words = line.split(" ")
      const updatedWords = words.map((word) => {
        //@ts-ignore
        if (!isNaN(word)) {
          const parsedNumber = parseFloat(word) * 3
          const decimalLength = word.split(".")[1]?.length || 0
          if (decimalLength <= 3) {
            return parsedNumber.toFixed(3) + " #Multipled by app.js"
          } else {
            return parsedNumber + " #Multipled1 by app.js"
          }
        }
        return word
      })
      return updatedWords.join(" ")
    }

    return line
  })

  const updatedContent = newContent.join("\n")

  res.status(200).json({ updatedContent })
}
