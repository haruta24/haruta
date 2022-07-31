import { Box, Button, HStack, Text } from "@chakra-ui/react"
import Head from "next/head"
import React, { FunctionComponent, useState } from "react"

const DiceApp: FunctionComponent = () => {
  const [dice, setDice] = useState(0)

  const onClick = () => {
    const rand = Math.floor(Math.random() * 6) + 1

    setDice(rand)
  }

  return (
    <>
      <Head>
        <title>{"Dice"}</title>
      </Head>
      <HStack justify={"center"} spacing={4}>
        {dice !== 0 && (
          <Box h={"100%"} p={4} fontSize={"md"} borderWidth={1}>
            <Text color={"red"}>{`${dice}`}</Text>
          </Box>
        )}
        <Button onClick={onClick}>{"サイコロ"}</Button>
      </HStack>
    </>
  )
}

export default DiceApp
