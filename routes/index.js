const express = require('express')
// 呼叫express提供的路由器
const router = express.Router()

const home = require('./modules/home')
const record = require('./modules/record')
const users = require('./modules/users')

router.use('/', home)
router.use('/record', record)
router.use('/users', users)

// 匯出路由
module.exports = router