import { Box, Button, Center, Grid, HStack, Stack } from "@chakra-ui/react"
import Head from "next/head"
import { confetti, variation } from "party-js"
import React, { FunctionComponent, useState } from "react"

// ReactがAaaAppを呼び出している
const AaaApp: FunctionComponent = () => {
  const patterns = [
    ["侍", "待"],
    ["科", "料"],
    ["干", "于"],
    ["夂", "夊"],
    ["子", "孑"],
  ]

  const [pattern, setPattern] = useState(() => {
    return patterns[0] //patterns[Math.floor(Math.random() * patterns.length)]
  })

  const [answerIndex, setAnswerIndex] = useState(() => {
    return 8 // Math.floor(Math.random() * 64)
  })

  const [first, second] = pattern

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
    if (index === answerIndex) {
      return second
    }
    return first
  })

  return (
    <>
      <Head>
        <title>{"間違い探し"}</title>
      </Head>
      <Stack spacing={4}>
        <Center>
          <text>{`${second}を見つける`}</text>
        </Center>
        <HStack justify={"center"} p={2}>
          <Box w={"100%"} maxW={"md"} h={"md"}>
            <Grid templateColumns="repeat(8, 1fr)" gap={1} h={"100%"}>
              {texts.map((text, index) => (
                <Button
                  key={index}
                  h={"100%"}
                  onClick={(event) => {
                    if (index !== answerIndex) return
                    confetti(event.currentTarget, {
                      count: variation.range(20, 40),
                    })
                    setPattern(
                      patterns[Math.floor(Math.random() * patterns.length)],
                    )
                    setAnswerIndex(Math.floor(Math.random() * 64))
                  }}
                >
                  {text}
                </Button>
              ))}
            </Grid>
          </Box>
        </HStack>
      </Stack>
    </>
  )
}

export default AaaApp
