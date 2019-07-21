import React from "react"

const OperatorButton = ({operator, setOperatorsState}) => {
  return (
    <button className='operator-button' value={operator.value} onClick={() => setOperatorsState(operator.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      operator.char}
    </button>
  )
}

export default OperatorButton