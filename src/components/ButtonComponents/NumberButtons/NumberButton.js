import React from "react"

const NumberButton = ({number, setOutputState}) => {
  return (
    <button className='number-button' onClick={() => setOutputState(number)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      number}
    </button>
  )
}

export default NumberButton