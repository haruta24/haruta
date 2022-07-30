import { Button, useColorMode } from "@chakra-ui/react"
import { FunctionComponent } from "react"

export const ButtonDarkMode: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const onClick = () => {
    toggleColorMode()
  }

  return (
    <Button size={"sm"} onClick={onClick}>
      {colorMode === "light" ? "ライト" : "ダーク"}
    </Button>
  )
}
