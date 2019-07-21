import React from "react"

const NumberButton = ({number, setOutputState, operatorsState, math}) => {
  return (
    <button className='number-button' value={number} onClick={() => {
        (Array.isArray(operatorsState)) ? setOutputState(number) : math(number)
    }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      number}
    </button>
  )
}

export default NumberButton