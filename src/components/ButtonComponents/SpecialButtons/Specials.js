import React,{useState} from "react"

//import any components needed
import SpecialButton from './SpecialButton'

//Import your array data to from the provided data file
import {specials} from '../../../data'

const Specials = () => {
  const [specialsState, setSpecialState] = useState(specials)

  return (
    <div>
      {specials.map(special => (
        <SpecialButton special={special} />))
      }
    </div>
  )
}

export default Specials