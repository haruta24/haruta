import { HStack, Input, Text } from "@chakra-ui/react"
import { FunctionComponent, useState } from "react"

const ClockApp: FunctionComponent = () => {
  const [text, setText] = useState(0)

  const sec = text * 60

  return (
    <HStack>
      <Input
        maxW={16}
        value={text}
        onChange={(event) => {
          setText(parseInt(event.target.value || "0"))
        }}
      />
      <Text>{"分"}</Text>
      <Text>{sec}</Text>
      <Text>{"秒"}</Text>
    </HStack>
  )
}

export default ClockApp
