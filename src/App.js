import React, {useState, useEffect} from "react";
import "./App.css";

import Logo from "./components/DisplayComponents/Logo";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Display from './components/DisplayComponents/Display'

function App() {
  const [outputState, setOutputState] = useState(0)
  const [num, setNum] = useState(0)
  const [secNum, setSecNum] = useState(0)
  const [op, setOp] = useState('')
  const [spec, setSpec] = useState('')

  function math(numInput) {
    const intNum1 = parseInt(outputState)
    const intNum2 = parseInt(numInput)
  
    // if (operatorsState === '+') setOutputState(intNum1 + intNum2)
    // else if (operatorsState === '-') setOutputState(intNum1 - intNum2)
    // else if (operatorsState === '*') setOutputState(intNum1 * intNum2)
    // else if (operatorsState === '/') setOutputState(intNum1 / intNum2)
    // else if (operatorsState === '=') setOutputState(intNum1)
    // else if (!operatorsState) return
  }

  useEffect(() => {
    setOutputState(num)
    // if()
  },[num])

  return (
    <div className="container">
      <Logo />
      <Display outputState={outputState}/>
      <div className="App">
        <div>
          <Specials />
          <Numbers outputState={outputState} setOutputState={setOutputState} math={math} />
        </div>
        <Operators />
      </div>
    </div>
  );
}

export default App;
