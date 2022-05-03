const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
// const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });

app.post('/api/contact', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth:  {
            user: 'slimjdavids@gmail.com',
            pass: 'slimjdavids'
        }
    })
    let mailOptions = {
        from: data.email,
        to: 'slimjdavids@gmail.com',
        subject: `Contact Form Submission from ${data.name}`,
        html: `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            <li>Phone: ${data.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
    }
    smtpTransport.sendMail(mailOptions, (err, res) => {
        if(err) {
            console.log(err)
            return res.send('error')
        }
        else {
            console.log('Email sent' + res.response);
            res.send('success')
        }
    })
    smtpTransport.close()
})

app.post('/api/invest', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth:  {
            user: 'slimjdavids@gmail.com',
            pass: 'slimjdavids'
        }
    })
    let mailOptions = {
        from: data.email,
        to: 'slimjdavids@gmail.com',
        subject: `Invest Form Submission from ${data.name}`,
        html: `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            <li>Desired Date: ${data.date}</li>
            <li>Phone: ${data.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
    }
    smtpTransport.sendMail(mailOptions, (err, res) => {
        if(err) {
            console.log(err)
            return res.send('error')
        }
        else {
            console.log('Email sent' + res.response);
            res.send('success')
        }
    })
    smtpTransport.close()
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})