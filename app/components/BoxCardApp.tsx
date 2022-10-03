import { Button, Stack, Text } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  title: string
  emoji: string
}

/**
 * FunctionComponent
 * = BoxCardAppの型を定義する
 * = 何を受け取って何を返すかを定義する
 * = JSX（タグ）を返すReactのコンポーネントを意味する関数に対して定義する
 */
export const BoxCardApp: FC<Props> = (props) => {
  return (
    <Button w={"100%"} h={"100%"} py={2}>
      <Stack spacing={2}>
        <Text align={"center"} fontSize={40}>
          {props.emoji}
        </Text>
        <Text align={"center"} fontSize={12}>
          {props.title}
        </Text>
      </Stack>
    </Button>
  )
}
