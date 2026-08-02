import React, {useState, useEffect} from 'react'
// . Digital clock — useEffect with setInterval and cleanup
function Clock() {
  const [timer, setTimer] = useState(new Date())
  console.log([timer])
  useEffect(() => {
    const hours = setInterval(() => {
      setTimer(new Date())
    }, 1000);

    return () => {
      clearInterval(hours)
    };
    
  },[timer])
 
 
  return (
    <div className='flex justify-center items-center min-h-screen text-[#ffffff]'>
      <div className='flex  items-center justify-center rounded-2xl p-4 text-4xl font-bold bg-[#1A1A1A] w-50 hover:bg-[#2C2C2C] cursor-pointer "'>

        <p>{timer.getHours()}:</p>
        <p>{timer.getMinutes()}:</p>
        <p>{timer.getSeconds()}{timer.getHours() >= 12 ? "pm" : "am"} </p>
      </div>
    </div>
  )
} 


export default Clock