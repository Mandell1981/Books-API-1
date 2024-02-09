require('dotenv').config()
const express = require('express')
const app = express()

// MIddleware
app.use(express.json())
// Route
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(process.env.PORT)