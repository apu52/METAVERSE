const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { subscribeUser } = require("./controllers/subscribe");
const dotenv = require("dotenv");
const { submitFeedback } = require("./controllers/feedback");
const { Contactus } = require("./controllers/contactus");
const { contributors } = require("./controllers/contributors");
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "*", // Be more specific in production
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://amnalpha7:IAtC1nJtXv4avH4Q@cluster0.y6w4aqp.mongodb.net/Meta",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    trim: true,
  },
});

const Feedback = mongoose.model("Feedbabck", feedbackSchema);

const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Save contact information to MongoDB
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();

    // Create a transporter object with your SMTP server details
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or another email service
      auth: {
        user: "your email ",
        pass: "your app password",
      },
    });

    // Set up email data with unicode symbols
    const mailOptions = {
      from: '"Metaverse Team" <no-reply@metaverse.com>',
      to: email,
      subject: "Acknowledgment - We received your message",
      html: `
            <div style="background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif; color: #333;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h1 style="color: #9c27b0; font-size: 36px;">Metaverse</h1>
                    <h2 style="color: #ff9bbd; font-size: 24px;">Acknowledgment</h2>
                </div>
                <p style="font-size: 18px;">Hello <span style="color: #9c27b0;">${name}</span>,</p>
                <p style="font-size: 18px;">Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
                <div style="background-color: #fff; padding: 15px; border-radius: 10px; border: 1px solid #ddd; margin: 20px 0;">
                    <h3 style="color: #9c27b0;">Your Details</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
                <p style="font-size: 18px;">Best regards,</p>
                <p style="font-size: 18px;"><strong style="color: #9c27b0;">Metaverse Team</strong></p>
                <div style="margin-top: 40px; text-align: center;">
                    <a href="https://apu52.github.io/METAVERSE/" style="color: #9c27b0; font-size: 18px; text-decoration: none;">Visit our website</a> | 
                    <a href="https://github.com/apu52/METAVERSE" style="color: #9c27b0; font-size: 18px; text-decoration: none;">Follow us on GitHub</a>
                </div>
            </div>
            `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res
          .status(500)
          .send({ success: false, message: "Failed to send email." });
      }
      res.send({
        success: true,
        message: "Email sent successfully, and contact information stored.",
      });
    });
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Failed to save contact information." });
  }
});

app.post("/subscribe", subscribeUser);
app.post("/rate-us", submitFeedback);
app.post("/contact-us", Contactus);
app.get("/contributorsPage", contributors);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});