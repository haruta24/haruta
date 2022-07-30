import { Button, HStack, Stack } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  buttonHandler: (code: string) => void
}

export const ButtonPanel: FC<Props> = (props) => {
  return (
    <Stack>
      <HStack>
        <Button height={10} width={10} onClick={() => props.buttonHandler("7")}>
          7
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("8")}>
          8
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("9")}>
          9
        </Button>
        <Button
          height={10}
          width={10}
          onClick={() => props.buttonHandler("AC")}
        >
          AC
        </Button>
      </HStack>
      <HStack>
        <Button height={10} width={10} onClick={() => props.buttonHandler("4")}>
          4
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("5")}>
          5
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("6")}>
          6
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("-")}>
          -
        </Button>
      </HStack>
      <HStack>
        <Button height={10} width={10} onClick={() => props.buttonHandler("1")}>
          1
        </Button>
        <Button
          height={10}
          width={10}
          conClick={() => props.buttonHandler("2")}
        >
          2
        </Button>
        <Button
          height={10}
          width={10}
          onClick={() => {
            props.buttonHandler("3")
          }}
        >
          3
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("+")}>
          +
        </Button>
      </HStack>
      <HStack>
        <Button height={10} width={10} onClick={() => props.buttonHandler("0")}>
          0
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler(".")}>
          .
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("D")}>
          D
        </Button>
        <Button height={10} width={10} onClick={() => props.buttonHandler("=")}>
          =
        </Button>
      </HStack>
    </Stack>
  )
}
