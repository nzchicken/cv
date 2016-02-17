var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var app = express();

require('dotenv').load();

var mailer = nodemailer.createTransport(smtpTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
}));

app.set('port', process.env.PORT || 3000);

app.use(express.static('dist'));
app.use(bodyParser.json());

app.post('/mail', function(req, res) {
    //email regex
    var regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    //check content
    console.log(req);
    var msg = req.body;
    console.log(msg);
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
        return;
    }

    //check recaptcha
    var url ="https://www.google.com/recaptcha/api/siteverify?response=" + msg.recaptcha_response + "&secret=" + process.env.RECAPTCHA_SECRET;
    console.log(url);
    fetch(url, {
        method: 'post'
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(response => {
        if (!response.success) throw new Error('Recaptcha failed: ' + response['error_codes']);
        var emailMessage = 'From: ' + msg.name + '\n';
        emailMessage += 'Email: ' + msg.email + '\n';
        emailMessage += 'Message: ' + msg.message;

        return mailer.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'Message from ' + msg.name + ' on your website',
            text: emailMessage
        });
    }).then(info => {
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

