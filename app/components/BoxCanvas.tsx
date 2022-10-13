import { Box } from "@chakra-ui/react"
import type P5 from "p5"
import { FC, useEffect, useRef } from "react"
import { useProcessing } from "../hooks/useProcessing"

type Props = {
  sketch(p: P5): void
}

export const BoxCanvas: FC<Props> = (props) => {
  const p5 = useProcessing()

  const ref = useRef(null)

  useEffect(() => {
    if (p5 === null) return
    if (ref.current === null) return
    const instance = new p5(props.sketch, ref.current)
    return () => {
      instance.remove()
    }
  }, [p5, props.sketch])

  return <Box ref={ref} />
}
