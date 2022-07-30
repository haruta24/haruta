import { Input } from "@chakra-ui/react"
import { FC } from "react"

type Props = { value: string }

export const Display: FC<Props> = (props) => {
  return <Input value={props.value} isReadOnly />
}
