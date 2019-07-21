import React,{useState} from "react"

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import {numbers} from '../../../data'

const Numbers = ({outputState, setOutputState, operatorsState, math}) => {
  const [numbersState, setNumbersState] = useState(numbers)

  return (
    <div className='number-container'>
      {numbers.map(number => (
        <NumberButton number={number} numbersState={numbersState} setNumbersState={setNumbersState} outputState={outputState} setOutputState={setOutputState} operatorsState={operatorsState} math={math} />))
      }
    </div>
  )
}

export default Numbers