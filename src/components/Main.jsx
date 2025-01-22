import React from 'react'
import Navbar from './Partials/Navbar'
import Home from './Partials/Home'
import Feature from './Partials/Feature'
import Partners from './Partials/Partners'
import Benefits from './Partials/Benefits'

const Main = () => {
  return (
    <div className="select-none flex flex-col gap-4">
      <Navbar />
      <Home />
      <div id="feature-section">
        <Feature />
      </div>
      <div id="benefit-section">
        <Benefits />
      </div>
      <div id="partner-section">
        <Partners />
      </div>
    </div>
  )
}

export default Main
