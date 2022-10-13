import type p5 from "p5"
import { useEffect, useState } from "react"

let __P5__: typeof p5 | null = null

export const useProcessing = () => {
  const [, setState] = useState(__P5__ === null)

  useEffect(() => {
    if (__P5__) return
    import("p5").then((module) => {
      __P5__ = module.default
      setState(false)
    })
  }, [])

  return __P5__
}
