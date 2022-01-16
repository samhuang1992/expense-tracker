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
  const {name, date, category, amount} = req.body
  // console.log(req)
  return Record.create({ name, date, category, amount })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// edit
router.get('/edit/:id', (req, res) => {
  // console.log(req)
  const id = req.params.id
  console.log(id)
  Record.findById(id)
    .lean()
    .then(record => res.render('edit', {record}))
    .catch(err => console.log(err))
})
  
router.put('/edit/:id', (req, res) => {
  const id = req.params.id
  const {name, date, category, amount} = req.body
  return Record.findOne({ id })
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
  const id = req.params.id
  console.log(id)
  return Record.findOne({ id })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router