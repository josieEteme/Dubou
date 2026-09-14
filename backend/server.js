require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const { sendContactEmail } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await sendContactEmail({ name, email, message });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});