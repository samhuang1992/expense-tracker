const express = require('express')
const router = express.Router()

const passport = require('passport')

// Facebook Login Router
router.get('/facebook', passport.authenticate('facebook', { 
  scope: ['email', 'public_profile'] 
}))

router.get('/facebook/callback',
  passport.authenticate('facebook', { 
    failureRedirect: '/users/login' ,
    successRedirect: '/'
  }))

  module.exports = router