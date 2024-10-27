const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()


const transporter = nodemailer.createTransport({
  service: 'gmail', 


  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

const subscribeUser = async (req, res) => {
  const { email } = req.body;

  try {
   
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for subscribing to Metaverse!',
      html: `<h3>Welcome to our Newsletter!</h3>
             <p>Thank you for subscribing to metavserse Stay tuned for the latest updates.</p>`
    };

   
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Subscription successful! A confirmation email has been sent.' });
  } catch (error) {
    console.error('Error in subscribing user:', error);
    res.status(500).json({ message: 'Oops! Something went wrong. Please try again.' });
  }
};

module.exports = { subscribeUser };