import React, {useState, useEffect} from "react";
import "./App.css";

import Logo from "./components/DisplayComponents/Logo";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Display from './components/DisplayComponents/Display'

function App() {
  const [outputState, setOutputState] = useState('0')
  const [num, setNum] = useState('0')
  const [secNum, setSecNum] = useState('')
  const [op, setOp] = useState('')
  const [secOp, setSecOp] = useState('')
  const [spec, setSpec] = useState('')

  function Operations() {
    const intNum1 = parseInt(num)
    const intNum2 = parseInt(secNum)
    let answer

    switch(secOp) {
      case '+':
        console.log('addition ran')
        answer = intNum2 + intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '-':
        console.log('subtraction ran')
        answer = intNum2 - intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '*':
        console.log('multiplication ran')
        answer = intNum2 * intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '/':
        console.log('division ran')
        answer = intNum2 / intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '=':
        console.log('equals')
        setOp('')
        setSecOp('')
        break
      default:
        console.log('Operations did not run.')
    }
  }

  useEffect(() => {
    setOutputState(num)
  },[num])

  return (
    <div className="container">
      <Logo />
      <Display outputState={outputState}/>
      <div className="App">
        <div>
          <Specials />
          <Numbers num={num} setNum={setNum} op={op} setOp={setOp} setSecOp={setSecOp}/>
        </div>
        <Operators op={op} setOp={setOp} num={num} secNum={secNum} setSecNum={setSecNum} Operations={Operations}/>
      </div>
    </div>
  );
}

export default App;
