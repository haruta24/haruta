import { Box, Text, Stack } from "@chakra-ui/react"
import { FunctionComponent } from "react"

type Props = {
  title: string
  description: string
}

/**
 * FunctionComponent
 * = BoxCardAppの型を定義する
 * = 何を受け取って何を返すかを定義する
 * = JSX（タグ）を返すReactのコンポーネントを意味する関数に対して定義する
 */
export const BoxCardApp: FunctionComponent<Props> = (props) => {
  return (
    <Box
      _hover={{ bg: "gray.300" }}
      h={"100%"}
      bg={"gray.200"}
      rounded={"lg"}
      p={4}
    >
      <Stack spacing={0}>
        <Text align={"center"}>{props.title}</Text>
        <Text align={"center"}>{props.description}</Text>
      </Stack>
    </Box>
  )
}
