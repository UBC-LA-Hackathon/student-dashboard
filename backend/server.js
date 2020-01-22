const express = require('express')
const app = express()
const port = 4001

/*
Step 1: Make API call to Canvas API here

*/

/*
Step 2: Create

*/

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
