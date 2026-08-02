// 4. Character counter for a textarea — controlled inputs
import React, { useState} from 'react'

function CharCounter() {
  const [text, setText] = useState("");

  const textValue = (e) => {
    setText(e.target.value)
  }
  
  return (
    <div>
      <textarea  onChange={textValue} placeholder='character counter'></textarea>
      <p>value:{text.length}</p>
    </div>
  )
}

export default CharCounter