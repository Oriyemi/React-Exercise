import React, {useState, useEffect} from 'react'
// . Digital clock — useEffect with setInterval and cleanup
function Clock() {
  let currentDate = new Date()
  
  return (
    <div className='flex '>
      <p>{currentDate.getHours()}:</p>
      <p>{currentDate.getMinutes()}:</p>
      <p>{currentDate.getSeconds()}</p>
    </div>
  )
} 
setInterval(() => {
  Clock()
},1000)

export default Clock