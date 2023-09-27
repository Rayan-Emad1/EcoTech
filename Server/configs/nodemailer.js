const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config();
const { EMAIL, PASSWORD } = process.env;

const sendVerificationEmail = (UserName, userEmail, verificationCode) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "EcoTech",
      link: "https://mailgen.js/",
    },
  });

  const emailContent = {
    body: {
      name: UserName,
      intro: `Welcome to EcoTech! We're very excited to have you on board. To get started with EcoTech, please verify your email using the following verification code: ${verificationCode}`,
      outro:
        "Need help or have questions? Just reply to this email; we'd love to help.",
    },
  };

  const emailTemplate = mailGenerator.generate(emailContent);

  const message = {
    from: EMAIL,
    to: userEmail,
    subject: "EcoTech: Email Verification",
    html: emailTemplate,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error("Error sending verification email:", error);
    } else {
      console.log("Verification email sent:", info.response);
    }
  });
}; 

const sendResetPasswordEmail = (UserName, userEmail, verificationCode) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "EcoTech",
      link: "https://mailgen.js/",
    },
  });

  const emailContent = {
    body: {
      name: UserName,
      intro: `Hello ${UserName},You have requested to reset your password at EcoTech. Please use the following verification code to reset your password: ${verificationCode}`,
      outro:
        "If you did not request this password reset, please ignore this email.",
    },
  };

  const emailTemplate = mailGenerator.generate(emailContent);

  const message = {
    from: EMAIL,
    to: userEmail,
    subject: "EcoTech: Password Reset Verification Code",
    html: emailTemplate,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error("Error sending password reset email:", error);
    } else {
      console.log("Password reset email sent:", info.response);
    }
  });
};

module.exports = { sendVerificationEmail , sendResetPasswordEmail};
