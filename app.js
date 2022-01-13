const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = '3000'
const exphbs = require('express-handlebars')


// setting handlebars
app.engine('hbs', exphbs({ Layout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



app.get('/', (req, res) => {
  res.render('index')
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.get('/edit', (req, res) => {
  res.render('edit')
})

app.listen(PORT,() => {
  console.log(`App is running on http://localhost:${PORT}`)
})
