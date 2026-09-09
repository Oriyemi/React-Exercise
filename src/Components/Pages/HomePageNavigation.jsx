import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePageNavigation() {
    const [username, setUsername] = useState();
    const navigate = useNavigate();
    function handleClick() {
        navigate("/dashboard/profile", { state: {username}})
    }
  return (
      <div>
          <h1>HomePageNavigation</h1>
          <input type="text" value={ username} onChange={(e)=>setUsername(e.target.value)}  />
          <button onClick={handleClick}>Go to Profile page</button>
    </div>
  )
}

export default HomePageNavigation