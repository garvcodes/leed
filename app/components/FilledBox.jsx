import React from 'react'
import {TypeAnimation} from 'react-type-animation';


const FilledBox = ({textFill}) => {
  return (
    <div className="form-component-container">
        <div className="formfield-box">
            <p>{textFill}</p>
        </div>
    </div>
  )
}

export default FilledBox