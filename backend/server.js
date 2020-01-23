const express = require('express')
const app = express()
const port = 4001
const canvasAPI = require('node-canvas-api')

// Step 1.1: Make API call to Canvas API here

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
