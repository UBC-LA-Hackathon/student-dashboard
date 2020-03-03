import React, { useState, useEffect } from 'react'

function Welcome () {
  const [self, setSelf] = useState('attendee')

  // add useEffect here for self

  return (
    <p>Welcome to the Workshopathon, {self}!</p>
  )
}

export default Welcome
