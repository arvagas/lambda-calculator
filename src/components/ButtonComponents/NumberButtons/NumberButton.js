import React from "react"

const NumberButton = ({number, num, setNum, op, setOp, setSecOp}) => {
  return (
    <button className='number-button' value={number} onClick={() => {
      if (op !== '') {
        setSecOp(op);
        setOp('');
        (number!=='.') ? setNum(number) : setNum(`0${number}`);
      } else ((num==='0') && (number!=='.')) ? setNum(number) : setNum(num + number)
    }}>{number}</button>
  )
}

export default NumberButton