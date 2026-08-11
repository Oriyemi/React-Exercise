//  BMI calculator — numeric inputs, basic validation
import React, {useState} from 'react'

function Bmi() {
    const [weight,setWeight] = useState("");
    const [height, setHeight] = useState("");
    const getWeight = (e) => {
       setWeight(e.target.value) 
    };
    const getHeight = (e) => {
        setHeight(e.target.value)
    };
    const calculate = () => {
         if (!weight || !height) {
            return "Please enter your weight and height";
         }

         if (Number(weight) <= 0 || Number(height) <= 0) {
           return "Weight and height must be greater than 0";
         }
        return Number(weight) / Number(height*height);
    };

    
  return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center px-4 py-16">
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">BMI Calculator</h1>
          <div className="w-full max-w-xs flex flex-col gap-3">
            <input placeholder='enter weight' type="number" value={ weight} onChange={ getWeight} className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400" />
            <input placeholder='enter height' type="number" value={height } onChange={getHeight } className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400" />
            <p className="mt-2 text-sm text-slate-600">Result:{calculate() }</p>
          </div>
    </div>
  )
}

export default Bmi