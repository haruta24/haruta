import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
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
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize="sm" textTransform="uppercase" opacity={0.6}>
                      {"2023/1/17"}
                    </Text>
                    <Text fontSize="sm" textTransform="uppercase" opacity={0.6}>
                      {"レス数 1"}
                    </Text>
                  </HStack>
                  <Stack>
                    <Heading
                      size="xs"
                      textTransform="uppercase"
                      paddingTop={2}
                      paddingBottom={2}
                    >
                      タイトル
                    </Heading>
                    <Text pt="2" fontSize="lg">
                      View a summary of all your clients over the last month.
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Input placeholder="コメントを追加" />
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize="sm" textTransform="uppercase" opacity={0.6}>
                      {"2023/1/17"}
                    </Text>
                    <Text fontSize="sm" textTransform="uppercase" opacity={0.6}>
                      {"レス数 2"}
                    </Text>
                  </HStack>
                  <Heading
                    size="xs"
                    textTransform="uppercase"
                    paddingTop={2}
                    paddingBottom={2}
                  >
                    タイトル
                  </Heading>
                  <Text pt="2" fontSize="lg">
                    View a summary of all your clients over the last month.
                  </Text>
                  <Text pt="2" fontSize="lg">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Input placeholder="コメントを追加" />
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize="sm" textTransform="uppercase" opacity={0.6}>
                      {"2023/1/17"}
                    </Text>
                    <Text fontSize="sm" textTransform="uppercase" opacity={0.6}>
                      {"レス数 2"}
                    </Text>
                  </HStack>
                  <Heading
                    size="xs"
                    textTransform="uppercase"
                    paddingTop={2}
                    paddingBottom={2}
                  >
                    タイトル
                  </Heading>
                  <Text pt="2" fontSize="lg">
                    View a summary of all your clients over the last month.
                  </Text>
                  <Text pt="2" fontSize="lg">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Input placeholder="コメントを追加" />
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
        <Stack flex={1}>
          <Card>
            <Heading size="xs" padding={4}>
              新しいスレッド
            </Heading>
            <CardBody>
              <Stack>
                <Input placeholder="タイトル" />
                <Input placeholder="内容" />
                <HStack justifyContent={"flex-end"}>
                  <Button colorScheme="blue">作成</Button>
                </HStack>
              </Stack>
            </CardBody>
          </Card>
          <Text>{"リプ"}</Text>
          <Input placeholder="りぷ" />
          <Input placeholder="りぷ" />
          <Input placeholder="りぷ" />
          <Input placeholder="りぷ" />
          <Text>{"過去スレッド"}</Text>
          <Input placeholder="スレッド名" />
          <Input placeholder="スレッド名" />
          <Input placeholder="スレッド名" />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CounterApp
