const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'smtp.forwardemail.net',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const sendVerificationEmail = (email, verificationCode) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `Your verification code is: <strong>${verificationCode}</strong>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendVerificationEmail