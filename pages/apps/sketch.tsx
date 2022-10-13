import { NextPage } from "next"
import P5 from "p5"
import { BoxCanvas } from "../../app/components/BoxCanvas"

const PageIndex: NextPage = () => {
  return <BoxCanvas sketch={sketch} />
}

const sketch = (p: P5) => {
  p.setup = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  }
  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  }
  p.mouseDragged = () => {
    p.strokeWeight(4)
    p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY)
  }
  p.draw = () => {}
}

export default PageIndex
