import React from "react"

//import any components needed
import SpecialButton from './SpecialButton'

//Import your array data to from the provided data file
import {specials} from '../../../data'

const Specials = ({spec, setSpec, SpecOps}) => {

  return (
    <div>
      {specials.map(special => (
        <SpecialButton key={special} special={special} spec={spec} setSpec={setSpec} SpecOps={SpecOps}/>))
      }
    </div>
  )
}

export default Specials