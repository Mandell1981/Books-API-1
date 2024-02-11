require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT


// Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// MIddleware
app.use(express.json())
// Books
const booksController = require('./controller/books_controller')
app.use('/books', booksController)


// Home
app.get('/', (req, res) => {
    res.send('Hello World!')
})





app.listen(process.env.PORT)