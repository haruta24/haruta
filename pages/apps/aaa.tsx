import { Box, Button, Center, Grid, HStack } from "@chakra-ui/react"
import Head from "next/head"
import React, { FunctionComponent, useState } from "react"

// ReactがAaaAppを呼び出している
const AaaApp: FunctionComponent = () => {
  const [answer, setAnswer] = useState(38)

  /**
   * 文字列を文字の配列にする
   * join　配列の全ての要素をくっ付けた文字列を返す
   * split 文字列の配列に分割app
   */
  const texts: string[] = new Array(65)
    .join("侍")
    .split("")
    /**
     * 「テキスト」「番数」を受け取って
     * もし「番数」が「41」なら「お」を返す
     * そうではないなら「あ」を返す
     */
    .map((text, index) => {
      if (index === answer) {
        return "待"
      }
      return text
    })

  return (
    <>
      <Head>
        <title>{"text"}</title>
      </Head>
      <Center>
        <text>{"待を見つける"}</text>
      </Center>
      <HStack justify={"center"}>
        <Box w={"md"} h={"md"}>
          <Grid templateColumns="repeat(8, 1fr)" gap={2} h={"100%"}>
            {texts.map((text, index) => (
              <Button key={index} h={"100%"}>
                {text}
              </Button>
            ))}
          </Grid>
        </Box>
      </HStack>
    </>
  )
}

export default AaaApp
