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
    const intNum1 = parseFloat(num)
    const intNum2 = parseFloat(secNum)
    let answer

    switch(secOp) {
      case '+':
        answer = intNum2 + intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '-':
        answer = intNum2 - intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '*':
        answer = intNum2 * intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '/':
        answer = intNum2 / intNum1
        setNum(answer)
        setSecNum(answer)
        setSecOp('')
        break
      case '=':
        setOp('')
        setSecOp('')
        break
      default:
        console.log('Operations did not run.')
    }
  }

  function SpecOps() {
    const intNum = parseFloat(num)

    switch(spec) {
      case 'C':
        setOutputState(0)
        setNum(0)
        setSecNum('')
        setOp('')
        setSecOp('')
        setSpec('')
        break
      case '+/-':
        let negPos = (intNum - (intNum*2))
        setNum(negPos)
        setSecNum(negPos)
        setSpec('')
        break
      case '%':
        setNum(intNum/100)
        setSpec('')
        break
    }
  }

  useEffect(() => {
    setOutputState(num)
    if (spec !== '') SpecOps()
  },[num, spec])

  return (
    <div className="container">
      <Logo />
      <Display outputState={outputState}/>
      <div className="App">
        <div>
          <Specials spec={spec} setSpec={setSpec} SpecOps={SpecOps}/>
          <Numbers num={num} setNum={setNum} op={op} setOp={setOp} setSecOp={setSecOp}/>
        </div>
        <Operators op={op} setOp={setOp} num={num} secNum={secNum} setSecNum={setSecNum} Operations={Operations}/>
      </div>
    </div>
  );
}

export default App;
