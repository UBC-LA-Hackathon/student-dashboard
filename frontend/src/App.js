import React, { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [self, setSelf] = useState('attendee')

  // add useEffect here

  return (
    <div className='App'>
      <p>Welcome to the Workshopathon, {self}!</p>
    </div>
  )
}

export default App
