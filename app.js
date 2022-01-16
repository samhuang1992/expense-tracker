const express = require('express')
const session = require('express-session')
const app = express()
const PORT = '3000'
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const usePassport = require('./config/passport')

const routes = require('./routes')

require('./config/mongoose')
// setting handlebars
app.engine('hbs', exphbs({ Layout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// use session
app.use(session({
  secret: 'MySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)
app.use(routes)


app.listen(PORT,() => {
  console.log(`App is running on http://localhost:${PORT}`)
})
