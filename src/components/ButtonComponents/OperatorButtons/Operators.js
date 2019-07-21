import React,{useState}  from "react"

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import {operators} from '../../../data'

const Operators = () => {
  const [operatorsState, setOperatorsState] = useState(operators)

  return (
    <div className='operator-container'>
      {operators.map(operator => (
        <OperatorButton operator={operator} setOperatorsState={setOperatorsState}/>))
      }
    </div>
  )
}

export default Operators