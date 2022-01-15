const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

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


router.get('/edit', (req, res) => {
  res.render('edit')
})

module.exports = router