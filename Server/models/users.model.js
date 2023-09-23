const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthday: { type: String, default: null },
  address: { type: String, default: null },
  notification_token: { type: String, default: null },
  verification_code: { type: String, default: null },
  is_verified: { type: Boolean, default: false },
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
  createdAt: { type: Date, default: Date.now },
});

userSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 300,
    partialFilterExpression: { is_verified: false },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
