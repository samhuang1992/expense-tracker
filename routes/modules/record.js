const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')


// new
router.get('/new', (req, res) => {
  res.render('new')
  Category.find()
    .lean()
    .then(categories => {
      res.render('new', { categories})
    })
    .catch(err => console.log(err))
})

router.post('/new', (req, res) => {
  const userId = req.user._id
  const {name, date, category, amount} = req.body
  // console.log(req)
  return Record.create({ name, date, category, amount, userId })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// edit
router.get('/edit/:id', (req, res) => {
  // console.log(req)
  const userId = req.user._id
  const _id = req.params.id
  Record.findById(_id, userId)
    .lean()
    .then(record => res.render('edit', {record}))
    .catch(err => console.log(err))
})
  
router.put('/edit/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const {name, date, category, amount} = req.body
  return Record.findOne({ _id, userId })
    .then(record => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// delete
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router