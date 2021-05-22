import { Button, Box, Center, variant, Text } from "@chakra-ui/react"
import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { BoxHeader } from "../../components/BoxHeader"
import { nanoid } from "nanoid"

const NanoidApp = ({ initialId }) => {
  // initialIdはサーバーサイドで生成されたID
  const [id, setId] = useState(initialId)

  return (
    <>
      <Head>
        <title>{"Nano ID"}</title>
      </Head>
      <BoxHeader />
      <Center>
        <Text fontSize={"50px"}>{id}</Text>
        <Button
          onClick={() => {
            setId(nanoid())
          }}
        >
          {"更新"}
        </Button>
      </Center>
    </>
  )
}

/**
 * サーバーサイド
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getServerSideProps = async () => {
  // IDをつくる
  const initialId = nanoid()

  // クライアントサイドにデータ（initialId）を送る
  return {
    props: { initialId },
  }
}

export default NanoidApp
