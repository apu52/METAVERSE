
const Feedback = require('../model/feedback.model.js');
const { sendThankYouEmail } = require('../services/emailService');

const submitFeedback = async (req, res) => {
  const { emoji, feedback, email } = req.body;

  if (!emoji || !feedback || !email) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const newFeedback = new Feedback({ emoji, feedback, email });
    await newFeedback.save();

    await sendThankYouEmail(email ,newFeedback.emoji ,newFeedback.feedback);

    return res.status(200).json({ success: true, message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { submitFeedback };
