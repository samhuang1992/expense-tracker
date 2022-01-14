const mongoose = require('mongoose')
const categoryData = require('../seed/category.json').results
const Category = require('../category')

mongoose.connect('mongodb://localhost/expense-tracker')
// 取得資料庫連線狀態
const db = mongoose.connection
// 連線錯誤
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
  Category.create(categoryData)
  .then(()=> {
    console.log('categoryData Done') 
    db.close()
  })
  .catch(err => console.log(err))
})   