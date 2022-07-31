import { Box, Button, Center, Grid, HStack } from "@chakra-ui/react"
import Head from "next/head"
import { confetti, variation } from "party-js"
import React, { FunctionComponent, useState } from "react"

// ReactがAaaAppを呼び出している
const AaaApp: FunctionComponent = () => {
  const [answer, setAnswer] = useState(() => {
    return Math.floor(Math.random() * 64)
  })

  /**
   * 文字列を文字の配列にする
   * join　配列の全ての要素をくっ付けた文字列を返す
   * split 文字列の配列に分割app
   */
  const texts: string[] = new Array(64).fill(null).map((text, index) => {
    /**
     * 「テキスト」「番数」を受け取って
     * もし「番数」が「41」なら「お」を返す
     * そうではないなら「あ」を返す
     */
    if (index === answer) {
      return "待"
    }
    return "侍"
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
              <Button
                key={index}
                h={"100%"}
                onClick={(event) => {
                  if (index !== answer) return
                  confetti(event.currentTarget, {
                    count: variation.range(20, 40),
                  })
                }}
              >
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
