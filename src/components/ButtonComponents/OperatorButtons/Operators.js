import React,{useState}  from "react"

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import {operators} from '../../../data'

const Operators = ({op, setOp, num, secNum, setSecNum, Operations}) => {

  return (
    <div className='operator-container'>
      {operators.map(operator => (
        <OperatorButton key={operator.char} operator={operator} op={op} setOp={setOp} num={num} secNum={secNum} setSecNum={setSecNum} Operations={Operations}/>))
      }
    </div>
  )
}

export default Operators