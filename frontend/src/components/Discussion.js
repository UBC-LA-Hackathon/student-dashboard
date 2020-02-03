import React, { useState, useEffect } from 'react'
import Heatmap from './Heatmap'

function Discussion ({ data }) {
  const [timestamps, setTimestamps] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      const discussionTimestamps = data
        .map(discussion => discussion.timestamp)

      setTimestamps(discussionTimestamps)
    }
  }, [data])

  return (
    <Heatmap timestamps={timestamps} />
  )
}

export default Discussion
