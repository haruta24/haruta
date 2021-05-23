import { Button, HStack, Text } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { FunctionComponent, useState } from "react"

type Props = { initialId: string }

const NanoidApp: FunctionComponent<Props> = (props) => {
  // initialIdはサーバーサイドで生成されたID
  const [id, setId] = useState(props.initialId)

  return (
    <>
      <Head>
        <title>{"Nano ID"}</title>
      </Head>
      <HStack justify={"center"} spacing={4}>
        <Text fontSize={"md"}>{id}</Text>
        <Button
          onClick={() => {
            setId(nanoid())
          }}
        >
          {"更新"}
        </Button>
      </HStack>
    </>
  )
}

/**
 * サーバーサイド
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // IDをつくる
  const initialId = nanoid()
  // クライアントサイドにデータ（initialId）を送る
  return {
    props: { initialId },
  }
}

export default NanoidApp
