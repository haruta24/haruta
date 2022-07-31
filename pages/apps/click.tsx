import { Box, Button, Center } from "@chakra-ui/react"
import Head from "next/head"
import { FunctionComponent, useState } from "react"

const CounterApp: FunctionComponent = () => {
  /**
   * State
   * count = 状態
   * setCount = 状態を更新する
   */
  const [count, setCount] = useState(0)

  /**
   * Action
   * ボタンを押した時
   */
  const onIncrement = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Head>
        <title>{"カウンター"}</title>
      </Head>
      <Center>
        <Box h={"100%"} p={4} fontSize={"50px"} bg-color={"white"}>
          {`${count}回`}
        </Box>
      </Center>
      <Center>
        <Button
          onClick={onIncrement}
          _hover={{ bg: "gray.300" }}
          h={"100%"}
          rounded={"lg"}
          p={4}
          variant="ghost"
          outline-color={"gray.300"}
        >
          {`タップしました🥳`}
        </Button>
      </Center>
    </>
  )
}

export default CounterApp
