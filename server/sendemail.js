require('dotenv').config();

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

function sendEmail(to, subject, text) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text
    };

    return transporter.sendMail(mailOptions);
}
module.exports = sendEmail;