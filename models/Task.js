const { model } = require('mongoose')
const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
  // to make new schema in our atlas mongo database 
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be moe than 20 char']
    // VALIDATION FOR MONGOOSE
    // the above are the validator builtin the mongoose 
  },
  completed: {
    type: Boolean,
    default : false,
    
  }
  // if only the above 2 type are define our app will not take other as an input in out database 
})

module.exports = mongoose.model('Task',TaskSchema)