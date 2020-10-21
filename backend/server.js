const express = require('express')
const app = express()
const cors = require('cors')
const port = 4001
const canvasAPI = require('node-canvas-api')
const { getDiscussions, flattenTopicAndReplies } = require('./canvasDiscussions')
const readCSV = require('./readCSV')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

// Make API call to Canvas API here
canvasAPI.getSelf()
    .then(self => console.log(self))


// Make endpoint for getSelf here


// Make endpoint for getDiscussions here


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
