const express = require('express')
const Item = require('../models/item')
const router = express.Router()

router.get('/', (req, res) => {
  Item.find()
    .sort({ _id: -1 })
    .then(items => res.json(items))
})

router.post('/', (req, res) => {
  const newItem = new Item({
    title: req.body.title
  })
  newItem.save().then(item => res.json(item))
})

router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

module.exports = router
