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
app.get('/getSelf', async (req, res) => {
    // we need to now make a call to the Canvas API,
    // wait for the response, then send the result to the frontend
    const self = await canvasAPI.getSelf()
    res.json(self)
})

// Make endpoint for getDiscussions here
app.get('/getDiscussions', async (req, res) => {

    // call getDiscussions with the Canvas course id of our choice
    // await the response
    const response = await getDiscussions(69306)

    // call flattenTopicAndReplies on the response
    const discussions = flattenTopicAndReplies(response)

    // send response back to frontend
    res.json(discussions)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
