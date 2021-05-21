import { Button, Box, Center, variant } from "@chakra-ui/react"
import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { BoxHeader } from "../../components/BoxHeader"

const CounterApp = () => {
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
      <BoxHeader />
      <Center>
        <Button
          onClick={onIncrement}
          _hover={{ bg: "gray.300" }}
          h={"100%"}
          rounded={"lg"}
          h={"100%"}
          p={4}
          fontcolor={"black"}
          fontweight={"400"}
          variant="ghost"
        >
          {`${count}回タップしました🥳`}
        </Button>
      </Center>
    </>
  )
}

export default CounterApp
