// Load env variables
require('dotenv').config()

// Import dependencies
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const items = require('./routes/items')
const { handleError } = require('./utils/ErrorHandler')

const app = express()

// Middlewares
app.use(express.json())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Connect to mongo Db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log(err))

// Specify routes
app.use('/api/items', items)

app.use(handleError)

// Handle unhandled Promise Rejection
process.on('unhandledRejection', (err, promise) => {
  throw err
})

// TODO : Need to find how to avoid process exit on operatinal errors
process.on('uncaughtException', (error, origin) => {
  console.log(`Caught exception: ${error}\n` + `Exception origin: ${origin}`)
  if (!error.isOperational === true) {
    process.exit(1)
  }
})

module.exports = app
