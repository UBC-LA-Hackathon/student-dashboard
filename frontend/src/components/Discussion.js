import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import Heatmap from './Heatmap'

function Discussion() {
  const [discussion, setDiscussion] = useState([])
  const [timestamps, setTimestamps] = useState([])

  const [selected, setSelected] = useState(null)
  const [loaded, setLoaded] = useState(false)

  // add useEffect here for discussion
  useEffect(() => {
    setLoaded(false)
    if (selected) {
      fetch(`http://localhost:4001/getDiscussions/${selected}`)
        .then(res => res.json())
        .then(data => setDiscussion(data))
        .then(() => setLoaded(true))
        .catch(err => console.log(err.mesage))
    }
  }, [selected])

  useEffect(() => {
    if (discussion.length > 0) {
      const discussionTimestamps = discussion
        .map(discussion => discussion.timestamp)

      setTimestamps(discussionTimestamps)
    }
  }, [discussion])

  return (
    <div>
      <Dropdown handleSelect={setSelected} />
      {loaded ? <Heatmap timestamps={timestamps} /> : <div>Loading ...</div>}
    </div>
  )
}

export default Discussion
