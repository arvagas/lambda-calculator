import React from "react"

const OperatorButton = ({operator, setOperatorsState}) => {
  return (
    <button className='operator-button' value={operator.value} onClick={() => setOperatorsState(operator.value)}>{operator.char}</button>
  )
}

export default OperatorButton