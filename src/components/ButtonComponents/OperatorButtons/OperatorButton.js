import React from "react"

const OperatorButton = ({operator, setOp, num, secNum, setSecNum, Operations}) => {
  return (
    <button className='operator-button' value={operator.value} onClick={() => {
      if (secNum!=='') {
        Operations();
      } else {
        setSecNum(num);
      }
      setOp(operator.value);
    }}>{operator.char}</button>
  )
}

export default OperatorButton