require('dotenv').config()
const express = require('express')
const conectToDb = require('./database/db')

const app = express()
conectToDb()

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running at ${PORT} port`)
})  