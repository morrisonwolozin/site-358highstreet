// routes/contact.js
import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {

    const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    });

    const submission = new Contact({ name, email, message });
    await submission.save();

    await transporter.sendMail({
      from:    process.env.SMTP_USER,
      to:      process.env.NOTIFY_EMAIL,
      subject: '358 High Street — New Contact Submission',
      text:    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(201).json({ success: true, message: 'Submission received.' });
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// GET /api/contact
router.get('/', async (req, res) => {
  try {
    const submissions = await Contact.find().sort({ timestamp: -1 });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

export default router;