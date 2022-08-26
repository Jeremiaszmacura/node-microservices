// IMPORT AND CONFIGURE ENV VARIABLES
require('dotenv').config()

// IMPORT EXTERNAL LIBRARIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// IMPORT INTERNAL LIBRARIES
const userRoutes = require('./routes/userRoutes')

// VARIABLES
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.APP_PORT || 4000;  // eslint-disable-line
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Node Microservices",
            description: "Node Microservices Backend API",
            contact: {
                name: "Jeremiasz Macura"
            },
            servers: ["http://localhost:4000"]
        }
    },
    apis: ["./routes/*.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// MIDDLEWARE
app.use(express.urlencoded({ extended: false })) // takes all url encoded data and parse to object, which we can use in request object (req.body)
app.use(express.json()) // all data send to api will be able to access as a json
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.status(200).send('Hello Node Backend!!')
})
app.use('/users', userRoutes)
app.use((req, res) => {
    res.status(404).send('404 Error')
})
app.use(function (err, req, res) {
    console.log(err)
    res.status(500).send('500 Server Error')
})

// CONNECT TO DATABASE AND RUN SERVER
const { connectDB, disconnectDB } = require('./config/mongooseLocalDB')
require('./config/passport')
if (process.env.NODE_ENV !== 'test') {
  connectDB()
}

let server = mongoose.connection.on('open', async function () {
  server = app.listen(port, function () {
    console.log(`Node Microservices RESTful API backend started on: http://localhost:${port}`)
    console.log(`Node Microservices RESTful API docs url: http://localhost:${port}/api-docs`)
  })
  return server
})

mongoose.connection.on('error', function (err) {
  console.error('DB connection error ' + err)
})

const stopServer = () => {
  server.close()
}

module.exports = { app, stopServer }
