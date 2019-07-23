import React from "react"

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import {numbers} from '../../../data'

const Numbers = ({num, setNum, op, setOp, setSecOp}) => {
  return (
    <div className='number-container'>
      {numbers.map(number => (
      <NumberButton key={number} number={number} num={num} setNum={setNum} op={op} setOp={setOp} setSecOp={setSecOp}/>))
      }
    </div>
  )
}

export default Numbers