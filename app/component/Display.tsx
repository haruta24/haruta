import { Input } from "@chakra-ui/react"

export default function Display(props: { value: string }) {
  return <Input value={props.value} isReadOnly />
}
