const express = require('express')
const router = express.Router()

const Category = require('../../models/seed/category.json').results
const Record = require('../../models/record')

const moment = require('moment')

router.get('/', (req, res) => { 
  const userId = req.user._id
  //計算總金額，同步種類icon與優化日期格式 
  let totalAmount = 0
  Record.find({ userId })
  .lean()
  .sort('asc')
  .populate('category')
  .then(expenses => {
    expenses.forEach(expense => {
      expense.date = moment(expense.date).format('MM-DD-YYYY')
      expense.icon = Category.find(category => category.name === expense.category).icon
      totalAmount += expense.amount
    })
    res.render('index', { expenses, totalAmount})  
  })
    .catch(err => console.log(err)) 
})


module.exports = router