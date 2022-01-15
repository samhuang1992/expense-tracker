const mongoose = require('mongoose')
const recordData = require('../seed/record.json').results
const Record = require('../record')

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
  Record.create(recordData)
  .then(()=> {
    console.log('recordData Done') 
    db.close()
  })
  .catch(err => console.log(err))
})   