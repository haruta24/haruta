import { Box, Text, Textarea } from "@chakra-ui/react"
import Head from "next/head"
import { FunctionComponent, useState } from "react"

const TextApp: FunctionComponent = () => {
  const [text, setText] = useState("")

  return (
    <>
      <Head>
        <title>{"text"}</title>
      </Head>
      <Box p={4}>
        <Textarea
          placeholder={"ここに文字を入力"}
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
