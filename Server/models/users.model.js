const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthday: { type: Date, default: null },
  address: { type: String, default: null },
  notification_token: {type:String, default:null },
  verificationCode: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

userSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 }); 

const User = mongoose.model("User", userSchema);

module.exports = User;
