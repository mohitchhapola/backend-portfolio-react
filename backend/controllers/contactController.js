const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to your inbox
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.PORTFOLIO_EMAIL,
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from your portfolio website.</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Reply email to user
    const replyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for contacting me!',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out! I'll get back to you as soon as possible.</p>
        <p>Best regards,<br/>Mohit Chhapola</p>
      `,
    };

    await transporter.sendMail(replyOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
};

module.exports = { sendContactEmail };