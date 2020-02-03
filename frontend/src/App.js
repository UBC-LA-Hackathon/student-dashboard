import React, { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [self, setSelf] = useState('attendee')
  const [discussion, setDiscussion] = useState([])

  // add useEffect here for self

  // add useEffect here for discussion

  return (
    <div className='App'>
      <p>Welcome to the Workshopathon, {self}!</p>
      <Discussion data={discussion} />
    </div>
  )
}

export default App
