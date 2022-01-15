const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => { 
  // console.log(req)
  Record.find()
  .lean()
  .then(expenses => res.render('index', { expenses })) //將資料傳給index  
  .catch(err => console.log(err)) 
})


module.exports = router