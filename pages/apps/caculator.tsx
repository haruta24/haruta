import { HStack, Stack } from "@chakra-ui/react"
import { FC, useState } from "react"
import { ButtonPanel } from "../../app/components/ButtonPanel"
import { Display } from "../../app/components/Display"
import { calculate, State } from "../../app/helpers/calculate"

const PageAppCaculator: FC = () => {
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  })

  const buttonHandler = (code: string) => {
    const nextState = calculate(code, state)
    setState(nextState)
  }

  return (
    <HStack justifyContent={"center"} pt={8}>
      <Stack maxW={"min-content"}>
        <Display value={state.current} />
        <ButtonPanel buttonHandler={buttonHandler} />
      </Stack>
    </HStack>
  )
}

export default PageAppCaculator
