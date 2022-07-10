require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = new express()

const petRouter = require('./routes/pets')

app.use(bodyParser.json())
app.use('/pets', petRouter)

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})
