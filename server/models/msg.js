var mongoose = require('mongoose');

var Msg = mongoose.model('Msg', {
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  msg: {
    type: String,
    default: "empty"
  }
  
});

module.exports = {Msg};



