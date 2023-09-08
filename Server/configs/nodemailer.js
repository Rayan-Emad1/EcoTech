const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();
const { EMAIL, PASSWORD } =  process.env


const sendVerificationEmail = (UserName, userEmail, verificationCode) => {

  let config = {
      service : 'gmail',
      auth : {
          user: EMAIL,
          pass: PASSWORD
      }
  }

  let transporter = nodemailer.createTransport(config);
  let MailGenerator = new Mailgen({
      theme: "default",
      product : {
          name: "EcoTech",
          link : 'https://mailgen.js/'
      }
  })

  let response = {
    body: {
      name: UserName,
      intro: `Welcome to EcoTech! We\'re very excited to have you on board. To get started with EcoTech, please verify your email using:\n\n\n Verification Code: ${verificationCode}`,
      outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
  };

  let mail = MailGenerator.generate(response)

  let message = {
    from : EMAIL,
    to : userEmail,
    subject: "EcoTech: Email verification",
    html: mail
  }

  transporter.sendMail(message)
    
}

module.exports = {sendVerificationEmail}

// action: {
//   instructions: 'To get started with EcoTech, please verify your email using:',
//   button: {
//     color: '#22BC66', 
//     text: 'Verify Email',
//     link: verificationCode,
//     fallback: 'If you have trouble clicking the "Verify Email" button, copy and paste the following URL into your browser: ' + verificationCode,
//   },
// },