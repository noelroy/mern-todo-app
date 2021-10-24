const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  current_date: {
    type: Date,
    default: Date.now()
  }
})

const Item = mongoose.model('item', ItemSchema)

module.exports = Item
