import { Button, Box, Text, HStack, Center, fontSize } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { BoxHeader } from "../../components/BoxHeader"

const ClockApp = () => {
  const [date, setDate] = useState(new Date())

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
      <BoxHeader />
      <Center>
        <Box px={12} color={"black"} fontSize={"50px"}>
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
