import React from "react"

const SpecialButton = ({special, spec, setSpec, SpecOps}) => {
  return (
    <button className='special-button' onClick={()=> {
      setSpec(special)
    }}>{special}</button>
  )
}

export default SpecialButton