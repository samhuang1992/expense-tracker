const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  // 註冊日期
  CreateAt:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('User', userSchema)