import React from "react"

const NumberButton = ({number, numbersState, setNumbersState, outputState, setOutputState, operatorsState, math}) => {
  return (
    <button className='number-button' value={number} onClick={() => {
        Array.isArray(numbersState) ? setNumbersState(number) : setNumbersState(numbersState + number)

        // (Array.isArray(operatorsState)) ? setOutputState(number) : math(number)
    }}>{number}</button>
  )
}

export default NumberButton