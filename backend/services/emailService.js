//import nodemailer
import dotenv from 'dotenv';
import nodeMailer from 'nodemailer';

dotenv.config();
// Create a transporter
const transporter = nodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Send email
export const sendEmail = async(to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: `"Job Board Platform" <${process.env.MAIL_USER}>`, // sender address
      to,
      subject,
      text,
    });
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
