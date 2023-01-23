import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { BiSubdirectoryRight } from "react-icons/bi"

const BoardApp: FunctionComponent = () => {
  return (
    <Stack p={4}>
      <Text w={"100%"}>{"匿名掲示板"}</Text>
      <Text>{"スレッド詳細"}</Text>
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
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <HStack>
          <Icon fontSize={"4xl"} as={BiSubdirectoryRight} />s
          <CardBody>
            <Input placeholder="コメントを追加する" />
          </CardBody>
        </HStack>
      </Card>
      <HStack>
        <Card>
          <CardBody>
            <Text>{"1"}</Text>
            <Text>ありがとう</Text>
          </CardBody>
        </Card>
      </HStack>
      <HStack>
        <Card>
          <CardBody>
            <Text>{"2"}</Text>
            <Text>ありがとう</Text>
          </CardBody>
        </Card>
      </HStack>
      <HStack>
        <Card>
          <CardBody>
            <Text>{"3"}</Text>
            <Text>ありがとう</Text>
          </CardBody>
        </Card>
      </HStack>
    </Stack>
  )
}

export default BoardApp
