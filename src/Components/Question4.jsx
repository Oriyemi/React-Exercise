// 4. Character counter for a textarea — controlled inputs
import React, { useState} from 'react'

function CharCounter() {
  const [text, setText] = useState("");

  const textValue = (e) => {
    setText(e.target.value)
  }
  
  return (
    <div className='flex  flex-col items-center justify-center min-h-screen '>
      <textarea className='border-2 rounded-2xl border-gray-500 w-60 text-center pt-4'  onChange={textValue} placeholder='Enter value '></textarea>
      <p className='font-bold text-3xl capitalize'>value:{text.length}</p>
    </div>
  )
}

export default CharCounter