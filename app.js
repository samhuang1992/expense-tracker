const express = require('express')
const app = express()
const PORT = '3000'
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')

require('./config/mongoose')
// setting handlebars
app.engine('hbs', exphbs({ Layout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)


app.listen(PORT,() => {
  console.log(`App is running on http://localhost:${PORT}`)
})
