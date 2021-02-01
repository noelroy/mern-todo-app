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
  due_date: {
    type: Date
  }
})

const Item = mongoose.model('item', ItemSchema)

module.exports = Item
