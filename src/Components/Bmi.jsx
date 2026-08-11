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
      <div>
          <h1>BMI Calculator</h1>
          <input placeholder='enter weight' type="number" value={ weight} onChange={ getWeight} />
          <input placeholder='enter height' type="number" value={height } onChange={getHeight } />
          <p>Result:{calculate().toFixed(2) }</p>
    </div>
  )
}

export default Bmi 