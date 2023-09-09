const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const { sendVerificationEmail } = require("../configs/nodemailer");

const checkEmail = async (req, res) => {
    try {
      const { email } = req.body;
      console.log(req.body);
        const existing_user = await User.findOne({ email });
  
      if (existing_user && existing_user.isVerified ) {
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
};

const registerUser = async (req, res) => {
    try {
      const { first_name, last_name, email, password, birthday} = req.body;
      const existing_user = await User.findOne({ email });
  
      if (existing_user) {
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const verificationCode = generateVerificationCode();
  
      const user = new User({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        birthday,
        verificationCode,
      });

      const UserName = `${user.first_name} ${user.last_name}`;
      await user.save();

      sendVerificationEmail(UserName, email, verificationCode);
  
      res.status(201).json({ message: 'User registered. Check your email for verification.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed' });
    }
};

const verify = async (req, res) => {
    try {
      const { email,verificationCode } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (user.verificationCode == verificationCode) {
        user.isVerified = true;
        user.verificationCode = null;
        await user.save();
  
        const tokenPayload = {
            _id: user._id,
            username: `${user.first_name} ${user.last_name}`,
            email: user.email,
          };
    
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);
  
        return res.status(200).json({ 
            message: 'Email verified. You can now log in.',
            token});

      } else {
        return res.status(400).json({ message: 'Invalid verification code' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Verification failed' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'Email is not found' });
      }
  
      const isPassword = await bcrypt.compare(password, user.password);
  
      if (!isPassword) {
        return res.status(404).json({ message: 'Password incorrect' });
      }

      if(!user.isVerified){
        return res.status(404).json({ message: 'Email not verified' });
      }
  
      const tokenPayload = {
        _id: user._id,
        username: user.username, 
        email: user.email,
      };
  
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);
  
      const { password: hashedPassword, ...userInfo } = user.toObject();
  
      res.status(200).json({
        token,
        user: userInfo,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {checkEmail,registerUser,verify,login}