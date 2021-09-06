import { ExternalLinkIcon } from "@chakra-ui/icons"
import {
  Center,
  HStack,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import React, { FunctionComponent } from "react"

const VocaloidApp: FunctionComponent = () => {
  return (
    <>
      <Center>
        <Stack>
          <HStack>
            <Text fontSize={"70px"} color={"#86cecb"}>
              {"ボカロ"}
            </Text>
            <Image boxSize={"70px"} src={"/みく.jpeg"}></Image>
          </HStack>
          <Center>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://youtu.be/HOz-9FzIDf0"
                  color={"#86cecb"}
                  isExternal
                >
                  マトリョシカ
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://youtu.be/qnX2CdOBcDI"
                  color={"#86cecb"}
                  isExternal
                >
                  ドーナツホール
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://youtu.be/0RU_05zpETo"
                  color={"#86cecb"}
                  isExternal
                >
                  パンダヒーロー
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
            </UnorderedList>
          </Center>
        </Stack>
      </Center>
    </>
  )
}

export default VocaloidApp
