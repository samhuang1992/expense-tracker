const recordData = require('../seed/record.json').results
const Record = require('../record')

const db = require('../../config/mongoose.js')

// 連線成功
db.once('open', () => {
  Record.create(recordData)
  .then(()=> {
    console.log('recordData Done') 
    db.close()
  })
  .catch(err => console.log(err))
})   