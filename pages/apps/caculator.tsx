import { FC, useState } from "react"
import ButtonPanel from "../../app/component/ButtonPanel"
import Display from "../../app/component/Display"
import calculate, { State } from "../../app/logic/calculate"

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
    <div>
      <Display value={state.current} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  )
}

export default PageAppCaculator
