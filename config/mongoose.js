const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expense-tracker')
// 取得資料庫連線狀態
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})   

module.exports = db