const express = require('express')
// 呼叫express提供的路由器
const router = express.Router()

const home = require('./modules/home')
const record = require('./modules/record')
const users = require('./modules/users')
const auth = require('./modules/auth')
// 載入Middle
const { authenticator } = require('../middleware/auth')


router.use('/record', authenticator, record)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

// 匯出路由
module.exports = router