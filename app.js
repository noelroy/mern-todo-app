// Load env variables
require('dotenv').config()

// Import dependencies
const express = require('express')
const mongoose = require('mongoose')

const items = require('./routes/items')

const app = express()

// Middlewares
app.use(express.json())

// Connect to mongo Db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log(err))

// Specify routes
app.use('/api/items', items)

module.exports = app
