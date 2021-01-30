// Load env variables
require('dotenv').config()

// Import dependencies
const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to db'))
    .catch(() => console.log(err))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
