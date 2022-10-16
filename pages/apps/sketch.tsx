import { NextPage } from "next"
import P5 from "p5"
import { useEffect } from "react"
import { BoxCanvas } from "../../app/components/BoxCanvas"

const PageIndex: NextPage = () => {
  useEffect(() => {
    const preventDefault = (event: any) => {
      event.preventDefault()
    }
    window.addEventListener("touchstart", preventDefault, { passive: false })
    window.addEventListener("touchmove", preventDefault, { passive: false })
    return () => {
      removeEventListener("touchstart", preventDefault)
      removeEventListener("touchmove", preventDefault)
    }
  }, [])

  return <BoxCanvas sketch={sketch} />
}

const sketch = (p: P5) => {
  p.setup = () => {
    p.resizeCanvas(innerWidth, innerHeight - 72)
  }
  p.windowResized = () => {
    p.resizeCanvas(innerWidth, innerHeight - 72)
  }
  p.mouseDragged = () => {
    p.strokeWeight(4)
    p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY)
  }
  p.draw = () => {}
}

export default PageIndex
