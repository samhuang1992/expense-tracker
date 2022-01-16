const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../../models/user')

// 登入頁
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

// 註冊頁
router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const {name, email, password, confirmPassword} = req.body
  User.findOne({ email })
    .then(user => {
      if(user){
        console.log('此信箱已經註冊過！')
        res.render('register', {
          name,
          email,
          password,
          confirmPassword
        })
      }else{  
        return User.create({
          name,
          email,
          password
        })
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))      
      }
    })
})
// 登出
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/users/login')
})

module.exports = router