const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendThankYouEmail = async (email, emoji, feedback) => {
  const mailOptions = {
    from: 'Metaverse', 
    to: email, 
    subject: 'Thank You for Your Feedback!',
    text: `
      Thank you for rating us! We appreciate your feedback.

      Here's what you submitted:
      - Emoji: ${emoji}
      - Feedback: ${feedback}
    `, // Email body with feedback details
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendThankYouEmail };
