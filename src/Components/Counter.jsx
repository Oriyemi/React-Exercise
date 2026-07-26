import React, { useState } from 'react'
// 1. Counter with increment, decrement, reset — useState
function Counter() {
    const [count, setCount] = useState(0);

    
  const increament = () => {
    setCount(count + 1);
  };

  const decreament = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
      <div className='min-h-screen flex justify-center items-center text-[#ffffff]  bg-slate-100'>
          <div className='bg-[#FF69B4] p-8 rounded-2xl shadow-xl w-120 text-center '>
              <h1 className='font-bold text-4xl mb-6'>Counter App </h1>
              <p className='text-3xl font-bold mb-8'>Value:{count}</p>
              <div className='flex justify-center gap-4'>
                  <button onClick={increament } className='bg-[#7C5DFA] hover:bg-[#5730f4] text-white px-4 py-2 rounded-lg transition duration-300'>increament</button>
                  <button onClick={reset } className='px-4 py-2 rounded-lg transition duration-300 bg-[#38BDF8] hover:bg-[#61ccfa]'>Reset</button>
                   <button onClick={decreament} className='px-4 py-2 rounded-lg transition duration-300 bg-[#FACC15] hover:bg-[#fede5e]'>Decreament</button>
              </div>
          </div>
    </div>
  )
}

export default Counter