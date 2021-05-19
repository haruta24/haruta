import { Button, Box } from "@chakra-ui/react"
import { useState } from "react"
import Head from "next/head"
import Link from "next/link"

const App = () => {
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
      <Box p={4}>
        <Button colorScheme={"blue"} onClick={onIncrement}>
          {`${count}回タップしました`}
        </Button>
        <Link href={"/"}>
          <a>{"戻る"}</a>
        </Link>
      </Box>
    </>
  )
}

export default App
