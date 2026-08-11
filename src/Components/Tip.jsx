// Tip calculator — derived values instead of extra state
import React, { useState } from "react";

function Tip() {
  const [userInput, setUserInput] = useState("");
  const [tipInput, setTipInput] = useState("");

  const billAmt = (e) => {
    setUserInput(e.target.value);
  };
  const tipPer = (e) => {
    setTipInput(e.target.value);
  };
  const tipAmt = () => {
    return Number(userInput) * (Number(tipInput) / 100);
  };
  const total = () => {
    return Number(userInput) + tipAmt();
    };
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-semibold">Tip Calculator</h1>
      <div className="flex flex-col gap-2">
        <input
          onChange={billAmt}
          value={userInput}
          type="text"
          placeholder="Bill amount"
          className="border-2 rounded-lg px-3 py-2"
        />
        <input
          onChange={tipPer}
          value={tipInput}
          type="text"
          placeholder="Tip %"
          className="border-2 rounded-lg px-3 py-2"
        />
      </div>

      <div className="text-center">
        <p>Tip Amount: {tipAmt()}</p>
        <p>Total:{total()} </p>
      </div>
    </div>
  );
} 

export default Tip;
