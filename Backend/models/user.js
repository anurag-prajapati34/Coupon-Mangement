const mongoose = require("mongoose");

//user schema 
const userSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User=mongoose.model('User',userSchema);
module.exports=User;
