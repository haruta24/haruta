import {  Box, Text,  } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { BoxHeader } from "../../components/BoxHeader"
import { Textarea } from "@chakra-ui/react"

const TextApp = () => {
  const [text, setText] = useState("")

  return (
    <>
      <Head>
        <title>{"text"}</title>
      </Head>
      <Box p={4}>
        <Textarea
          placeholder={"Here is a sample placeholder"}
          value={text}
          onChange={(event) => {
            // 新しい入力
            const nextText = event.target.value
            // 20文字より大きいと更新しない
            if (nextText.length > 20) return
            // 入力を更新する
            setText(nextText)
          }}
        />
        <Text>{`${text.length}/20`}</Text>
      </Box>
    </>
  )
}

export default TextApp
