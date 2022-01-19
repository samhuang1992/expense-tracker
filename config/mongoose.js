const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'http://localhost:3000/auth/facebook/callback'
mongoose.connect(MONGODB_URI)
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