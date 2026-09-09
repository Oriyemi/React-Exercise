import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
      <div>
          <Link to='profile'>Profile</Link>
          <Link to='setting'>Settings</Link>
          <h1>This is a dashboard</h1>
          <Outlet/>
    </div>
  )
}

export default Dashboard