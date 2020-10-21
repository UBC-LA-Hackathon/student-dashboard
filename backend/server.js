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
app.get('/getDiscussions/:id', async (req, res) => {

    // get the course id from our request parameters
    const courseId = req.params.id

    // call getDiscussions with the Canvas course id passed in
    // await the response
    const response = await getDiscussions(courseId)

    // call flattenTopicAndReplies on the response
    const discussions = flattenTopicAndReplies(response)

    // send response back to frontend
    res.json(discussions)
})

app.get('/getCourses', async (req, res) => {

    // The Try/Catch syntax is a way of handling runtime errors in JavaScript
    // Read more about it here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    // This isn't required for your web app to work, but it gives us more control over how errors are handled

    try {
        // get our Canvas user data from the Canvas API
        const self = await canvasAPI.getSelf()

        // make another call to Canvas API for our courses and pass in our user id
        const courses = await canvasAPI.getCoursesByUser(self.id)

        // serve the response on the endpoint as JSON data
        res.json(courses)
    } catch {

        // if something goes wrong in the Try block, we'll send this message instead of data
        res.send('An error has occured!')
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
