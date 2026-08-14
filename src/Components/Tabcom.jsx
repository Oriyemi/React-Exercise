//  Tabs component — lifting state to a parent
import React, { useState } from 'react';


function App() {
    const [activeTab, setActiveTab] = useState("Today");
  return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
          <Tabcom activeTab={activeTab} setActiveTab={setActiveTab} /> 
          {/* HERE WE ARE RENDERING THE TABCOM AND WE ARE PASSING THE SETACTIVETAB AS A PROP. IN THIS CASE THE TABCOM-COMPONENTNAME (OR WHAT WE ARE RENDERING), THE SETACTIVETAB IS THE PROPSNAME WHILE THE OTHER SETACTIVETAB IS THE PROP WE ARE PASSING .HERE WE ARE TRYING TO PASS THE SETACTIVETAB FROM APP TO TABCOM FNC BECAUSE THE ACTIVETAB AND THE SETTER IS ON THE APP FUNCTION WHICH IS THE PARENTS , AND WE ARE HANDLING THE CLICK WITH THE SETACTIVETAB SO WE NEED TO PASS THE SETACTIVETAB TO TABCOM FOR THAT TO WORK (APP OWNS SETACTIVETAB NOW SO WE NEED TO PASS IT DOWN TO TABCOM BECAUSE TABCOM NEEDS TO USE IT FOR THE CLICK BUTTONS FUNCTIONS ) */}
    </div>
  )
}


// INSIDE THE TABCOM PARAMETER WE NEED TO RECEIVE THE PROPS OBJECT PASSED IN APP FUNCTION SO WE PASSED IN THE {SETACTIVETAB }  PROP TO THE FUNCTION SO THAT TABCOM CAN BE ABLE TO RECEIVE THE APP STATE AND USE TO ACTIVATE THE FUCTIONS ON THE TABCOM BECAUSE WE USE THE SETTER SETACTIVETAB ON THE TABCOM 
function Tabcom({activeTab, setActiveTab}) {
    

    const handleTodaysClick = () => {
        setActiveTab("Today")
    };

    const handleTomorrowClick = () => {
        setActiveTab("Tomorrow")
    };
    const handle3daysClick = () => {
        setActiveTab("Next 3 days")
    };
  return (
        <div className="flex gap-1 rounded-lg bg-white p-1 shadow-sm border border-slate-200">

      <button
        onClick={handleTodaysClick}
        className={`px-5 py-2 rounded-md text-sm font-medium transition ${
          activeTab === "Today"
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        Today
      </button>

      <button
        onClick={handleTomorrowClick}
        className={`px-5 py-2 rounded-md text-sm font-medium transition ${
          activeTab === "Tomorrow"
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        Tomorrow
      </button>

      <button
        onClick={handle3daysClick}
        className={`px-5 py-2 rounded-md text-sm font-medium transition ${
          activeTab === "Next 3 days"
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`}
      >
        Next 3 days
      </button>

    </div>
  )
}
export default App


