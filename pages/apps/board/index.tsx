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
import Link from "next/link"
import { FunctionComponent } from "react"
import { AiFillLike } from "react-icons/ai"

const BoardApp: FunctionComponent = () => {
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
              <Text fontSize="sm" textTransform="uppercase">
                {"HIT数 9"}
              </Text>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize="sm" textTransform="uppercase" opacity={0.6}>
                      {"7日前(2023/1/17)"}
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
                    <Link href={`/apps/board/aa`}>
                      <Button colorScheme="blue">{"スレッド詳細"}</Button>
                    </Link>
                    <Button colorScheme="blue" leftIcon={<AiFillLike />}>
                      {"いいねボタン"}
                    </Button>
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
                  <Stack>
                    <Link href={`/apps/board/aa`}>
                      <Button colorScheme="blue">{"スレッド詳細"}</Button>
                    </Link>
                    <Button colorScheme="blue" leftIcon={<AiFillLike />}>
                      {"いいねボタン"}
                    </Button>
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
                  <Stack>
                    <Link href={`/apps/board/aa`}>
                      <Button colorScheme="blue">{"スレッド詳細"}</Button>
                    </Link>
                    <Button colorScheme="blue" leftIcon={<AiFillLike />}>
                      {"いいねボタン"}
                    </Button>
                  </Stack>
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
        </Stack>
      </Stack>
    </Stack>
  )
}

export default BoardApp
