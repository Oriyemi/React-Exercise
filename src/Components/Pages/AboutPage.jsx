import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AboutPage() {
  return (
      <div>
         
          <Link to='contact'>Contact</Link>
          <Link to='address'>Address</Link>
          <h1>This is a About Page</h1>
          <Outlet/>
   
    </div>
  )
}

export default AboutPage