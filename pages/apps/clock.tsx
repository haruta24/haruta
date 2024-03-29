import { Box, Center, HStack, Text } from "@chakra-ui/react"
import Head from "next/head"
import { FunctionComponent, useEffect, useState } from "react"

const ClockApp: FunctionComponent = () => {
  const [date, setDate] = useState(new Date())

  // useEffectの引数数える
  // useEffectの第一引数の返り値

  useEffect(() => {
    /**
     * 毎秒実行される
     * 1秒 = 1000
     */
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{"時計"}</title>
      </Head>
      <Center>
        <Box px={12} fontSize={"7xl"}>
          <HStack>
            <Text>{date.getFullYear()}</Text>
            <Text>{"/"}</Text>
            <Text>{date.getMonth() + 1}</Text>
            <Text>{"/"}</Text>
            <Text>{date.getDate()}</Text>
          </HStack>
          <HStack>
            <Text>{date.getHours()}</Text>
            <Text>{":"}</Text>
            <Text>{date.getMinutes()}</Text>
            <Text>{":"}</Text>
            <Text>{date.getSeconds()}</Text>
          </HStack>
        </Box>
      </Center>
    </>
  )
}

export default ClockApp
