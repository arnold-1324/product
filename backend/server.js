const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getBusinessEmailTemplate } = require('./emailTemplate');
require('dotenv').config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending route
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const html = getBusinessEmailTemplate({ name, email, message });
    const response = await fetch(process.env.MAILTRAP_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILTRAP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: process.env.MAILTRAP_FROM_EMAIL, name: process.env.MAILTRAP_FROM_NAME },
        to: [{ email: process.env.MAILTRAP_TO_EMAIL }],
        subject: 'New Customer Query from Vino Herballife',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html,
        category: 'Integration Test',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});