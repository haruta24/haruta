import { Card, CardBody, Input, Stack, Text } from "@chakra-ui/react"
import { FunctionComponent } from "react"

const CounterApp: FunctionComponent = () => {
  return (
    <Stack p={4}>
      <Text w={"100%"}>{"匿名掲示板"}</Text>
      <Stack
        w={"100%"}
        spacing={4}
        alignItems={{ base: "", md: "flex-start" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack flex={1}>
          <Text>{"新着タブ"}</Text>
          <Card>
            <CardBody>
              <Text>
                {"View a summary of all your customers over the last month."}
              </Text>
            </CardBody>
          </Card>
        </Stack>
        <Stack flex={1}>
          <Text>{"スレッド作成"}</Text>
          <Input placeholder="スレッド名" />
          <Text>{"スレッド名"}</Text>
          <Text>{"リプ"}</Text>
          <Text>{"過去スレッド"}</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CounterApp
