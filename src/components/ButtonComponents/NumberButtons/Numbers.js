import React,{useState} from "react"

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import {numbers} from '../../../data'

const Numbers = ({outputState, setOutputState, operatorsState, math}) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers)

  return (
    <div className='number-container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numbers.map(number => (
       <NumberButton number={number} numbersState={numbersState} setNumbersState={setNumbersState} outputState={outputState} setOutputState={setOutputState} operatorsState={operatorsState} math={math} />))
       }
    </div>
  )
}

export default Numbers