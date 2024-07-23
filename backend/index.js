const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 


const app = express();
const PORT = process.env.PORT || 5175;
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

app.post('/send', (req, res) => {
    console.log('Received POST request:', req.body);

    const { name, email, phone, company, address, requirements } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use environment variable
            pass: process.env.EMAIL_PASS, // Use environment variable
        },
    });

    let mailOptions = {
        from: 'singh.ujjwalkumar1212@gmail.com', // sender address
        to: 'khushvaha536@gmail.com', // list of receivers
        subject: 'New Contact Form Submission', // Subject line
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Company: ${company}
            Address: ${address}
            Requirements: ${requirements}
        `, // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});