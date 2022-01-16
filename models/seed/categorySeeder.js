const categoryData = require('../seed/category.json').results
const Category = require('../category')

const db = require('../../config/mongoose')

// 連線成功
db.once('open', () => {
  Category.create(categoryData)
  .then(()=> {
    console.log('categoryData Done') 
    db.close()
  })
  .catch(err => console.log(err))
})   