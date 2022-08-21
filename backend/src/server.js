// IMPORT AND CONFIGURE ENV VARIABLES
require('dotenv').config()

// IMPORT EXTERNAL LIBRARIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// IMPORT INTERNAL LIBRARIES


// VARIABLES
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.APP_PORT || 4000;  // eslint-disable-line

// MIDDLEWARE
app.use(express.urlencoded({ extended: false })) // takes all url encoded data and parse to object, which we can use in request object (req.body)
app.use(express.json()) // all data send to api will be able to access as a json
app.get('/', (req, res) => {
    res.send('Hello Node Backend!!')
})
app.use((req, res) => {
    res.status(404).send('404 Error')
})
app.use(function (err, req, res) {
    console.log(err)
    res.status(500).send('500 Server Error')
})

// CONNECT TO DATABASE AND RUN SERVER
require('./config/mongooseLocalDB')
// require('./config/passport')

mongoose.connection.on('open', function () {
  app.listen(port, function () {
    console.log(`Hotel RESTful API server started on: http://localhost:${port}`)
  })
})

mongoose.connection.on('error', function (err) {
  console.error('DB connection error ' + err)
})

module.exports = app
