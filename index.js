var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var app = express();

var mailer = nodemailer.createTransport(smtpTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
}));

require('dotenv').load();

app.set('port', process.env.PORT || 3000);

app.use(express.static('dist'));
app.use(bodyParser.json());


app.post('/mail', function(req, res) {
    //email regex
    var regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    //check content
    var msg = req.body;

    if (!msg.name || !msg.email || !msg.message || !msg.recaptcha_response) {
        res.status(400).send({ status: 'FAILED', message: 'Need to provide name, email, message, and valid captcha response'});
        return;
    }

    if (!regex_email.test(msg.email)) {
        res.status(400).send({ status: 'FAILED', message: 'Email needs to be in the correct email format'});
        return;
    }

    if (msg.message.length > 1000) {
        res.status(400).send({ status: 'FAILED', message: 'Message needs to be less than 1000 characters'});
    }

    //check recaptcha
    var url ="https://www.google.com/recaptcha/api/siteverify?response=" + msg.recaptcha_response + "&secret=" + process.env.RECAPTCHA_SECRET;
    fetch(url, {
        method: 'post'
    })
        .then(response => {
            return response.json();
        }).then(response => {
            if (!response.success) throw new Error('Recaptcha failed: ' + response['error_codes']);
            var htmlMessage = 'From: ' + msg.name;
            htmlMessage += 'Email: ' + msg.email;
            htmlMessage += 'Message: ' + msg.message;
            
            return mailer.sendMail({
                from: msg.email,
                to: process.env.EMAIL_TO,
                subject: 'Message from ' + msg.name + ' on your website',
                html: htmlMessage
            });
        }).then(info => {
            console.log(info);
            res.status(200).send({ status: 'OK' });
        }).catch(error => {
            console.log(error);
            //this is gross, but oh well.
            if (error.toString().indexOf('Recaptcha') !== -1) {
                res.status(400).send({ status: 'FAILED', message: 'Invalid Recaptcha response'});
                return;
            }
            res.status(400).send({ status: 'FAILED', message: 'Failed to send email'});
        });
        
});

app.listen(app.get('port'), function() {
   console.log('App running on port ' + app.get('port')); 
});

