import { Button, Box, Text, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

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
      <Box p={4}>
        <HStack>
          <Text>{date.getHours()}</Text>
          <Text>{":"}</Text>
          <Text>{date.getMinutes()}</Text>
          <Text>{":"}</Text>
          <Text>{date.getSeconds()}</Text>
        </HStack>
        <Link href={"/"}>
          <a>{"戻る"}</a>
        </Link>
      </Box>
    </>
  )
}

export default ClockApp
