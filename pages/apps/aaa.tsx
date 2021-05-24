import { Box, Button, Grid, HStack } from "@chakra-ui/react"
import Head from "next/head"
import React, { FunctionComponent } from "react"
// ReactがAaaAppを呼び出している
const AaaApp: FunctionComponent = () => {
  /**
   * 文字列を文字の配列にする
   * join　配列の全ての要素をくっ付けた文字列を返す
   * split 文字列の配列に分割
   */
  const texts: string[] = new Array(65).join("あ").split("")

  return (
    <>
      <Head>
        <title>{"text"}</title>
      </Head>
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
