const express = require('express')
const app = express()
const PORT = '3000'
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Record = require('./models/record')
const Category = require('./models/category')
const routes = require('./routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/expense-tracker')
// 取得資料庫連線狀態
const db = mongoose.connection

// setting handlebars
app.engine('hbs', exphbs({ Layout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)



app.listen(PORT,() => {
  console.log(`App is running on http://localhost:${PORT}`)
})
