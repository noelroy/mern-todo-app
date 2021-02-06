const express = require('express')
const Item = require('../models/item')
const { AppError } = require('../utils/ErrorHandler')
const router = express.Router()

router.get('/', (req, res) => {
  Item.find()
    .sort({ _id: -1 })
    .then(items => res.json({
      success: true,
      items
    }))
})

router.post('/', (req, res) => {
  const newItem = new Item({
    title: req.body.title
  })
  newItem.save().then(item => res.json({
    success: true,
    item
  }))
})

router.delete('/:id', (req, res, next) => {
  // Item.findById(req.params.id)
  //   .then(item => item.remove().then( item => res.json(item)))
  //   .catch((err) => {console.log(err);throw err})
  Item.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) {
        return next(new AppError('Error', 400, 'Item not found in DB', true))
      }
      res.json({
        success: true,
        item
      })
    })
})

module.exports = router
