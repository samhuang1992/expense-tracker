const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trackerSchema = new Schema({
  name:{
    type: String,
    required: true
  }
  // date:{
  //   type: Date,
  //   required: true
  // },
  // category:{
  //   type: Boolean,
  //   required: true
  // },
  // cost:{
  //   type:Number,
  //   required:true
  // }
})

module.exports = mongoose.model('Tracker', trackerSchema)