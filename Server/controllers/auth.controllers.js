const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/users.model")



const checkEmail = async (req, res) => {
    try {
      const { email } = req.query;
        const existing_user = await User.findOne({ email });
  
      if (existing_user) {
        return res.status(200).json({ isUnique: false });
      }
  
      res.status(200).json({ isUnique: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error checking email uniqueness' });
    }
  };

const  generateVerificationCode = () => {
    const codeLength = 4;
    let verificationCode = 0;
      for (let i = 0; i < codeLength; i++) {
      const digit = Math.floor(Math.random() * 10);
      verificationCode = verificationCode * 10 + digit;
    }  
    return verificationCode;
}




module.exports = {checkEmail}