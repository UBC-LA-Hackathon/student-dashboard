import React, { useState } from 'react'
import './App.css'

function App () {
  const [self, setSelf] = useState(undefined)

  return (
    <div className='App'>
      <p>Welcome to the Workshopathon, {self ? self.name : 'attendee'}!</p>
    </div>
  )
}

export default App
