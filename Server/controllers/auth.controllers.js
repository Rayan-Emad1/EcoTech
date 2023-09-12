const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const { sendVerificationEmail } = require("../configs/nodemailer");
const Joi = require("joi");

const jwtSecret = process.env.JWT_SECRET;

const generateVerificationCode = () => {
  const code_length = 4;
  let verification_code = 0;
  for (let i = 0; i < code_length; i++) {
    const digit = Math.floor(Math.random() * 10);
    verification_code = verification_code * 10 + digit;
  }
  return verification_code;
};

const registerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  birthday: Joi.date(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const existing_user = await User.findOne({ email });

    if (existing_user && existing_user.is_verified) {
      return res.status(200).json({ isUnique: false });
    }

    res.status(200).json({ isUnique: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error checking email uniqueness" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { first_name, last_name, email, password, birthday } = req.body;
    const existing_user = await User.findOne({ email });

    if (existing_user) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const verification_code = generateVerificationCode();

    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      birthday,
      verification_code,
    });

    const UserName = `${user.first_name} ${user.last_name}`;
    await user.save();

    sendVerificationEmail(UserName, email, verification_code);

    res
      .status(201)
      .json({ message: "User registered. Check your email for verification." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
};

const verify = async (req, res) => {
  try {
    const { email, verification_code } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.verification_code == verification_code && user.is_verified === false ) {
      user.is_verified = true;
      user.verification_code = null;
      await user.save();

      const token = jwt.sign({ _id: user._id, role: user.role }, jwtSecret);
      const { password: hashedPassword, ...userInfo } = user.toObject();

      return res.status(200).json({
        message: "Email verified. You can now log in.",
        token,
        user: userInfo,
      });
    } else {
      return res.status(400).json({ message: "Invalid verification code Or already verified" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Verification failed" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email is not found" });
    }

    const is_password = await bcrypt.compare(password, user.password);

    if (!is_password) {
      return res.status(404).json({ message: "Password incorrect" });
    }

    if (!user.is_verified) {
      return res.status(404).json({ message: "Email not verified" });
    }

    const token = jwt.sign({ _id: user._id, role: user.role }, jwtSecret);

    const { password: hashedPassword, ...userInfo } = user.toObject();

    res.status(200).json({
      message: "Login verified. You can now log in.",
      token,
      user: userInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { checkEmail, registerUser, verify, login };
