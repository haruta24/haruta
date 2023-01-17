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
          <Card>
            <CardBody>
              <Text>
                {"View a summary of all your customers over the last month."}
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Text>
                {
                  "View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month."
                }
              </Text>
            </CardBody>
          </Card>
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
          <Input placeholder="スレッド名" />
          <Input placeholder="スレッド名" />
          <Input placeholder="大きな体にふわふわの被毛が特徴的なラガマフィンの原産国はアメリカ。1994年に作出された比較的新しい猫種です。ここではラガマフィンの性格や体重、大きさ、毛色の種類などを解説します。なお、販売中のラガマフィンをお探しの方は子猫ブリーダーナビもご参考ください。" />
          <Text>{"スレッド名"}</Text>
          <Input placeholder="スレッド名" />
          <Input placeholder="スレッド名" />
          <Input placeholder="スレッド名" />
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
