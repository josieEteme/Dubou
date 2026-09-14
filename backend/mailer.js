
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendContactEmail({ name, email, message }) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `You have a new message from ${name} (${email}): ${message}`,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendContactEmail };