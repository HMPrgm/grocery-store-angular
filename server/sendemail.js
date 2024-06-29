require('dotenv').config();

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

function sendEmail(to, subject, text) {
    console.log(to)
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text
    };

    return transporter.sendMail(mailOptions);
}
module.exports = sendEmail;