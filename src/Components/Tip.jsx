// Tip calculator — derived values instead of extra state
import React, { useState } from "react";

function Tip() {
    const [userInput, setUserInput] = useState("");
    const [tipInput,setTipInput]=useState("")
    
    const billAmt = (e) => {
        setUserInput(e.target.value)
    };
     const tipPer = (e) => {
         setTipInput(e.target.value)
    };
     const tipAmt = () => {
        return Number(userInput)*(Number(tipInput) / 100);
    };
     const total = () => {
         return Number(userInput) + tipAmt();
    };






  return (
    <div>
      <h1>Tip Calculator</h1>
      <div>
         <input onChange={billAmt} value={userInput} type="text" placeholder="Bill amount" />
         <input  onChange={tipPer} value={tipInput}  type="text" placeholder="Tip %" />
      </div>
          
      <div>
         <p>Tip Amount: {tipAmt()}</p>
         <p>Total:{total()} </p>
      </div>
    </div>
  );
}

export default Tip;
