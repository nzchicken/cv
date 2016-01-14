var express = require('express');
var mailer = require('express-mailer');
var bodyParser = require('body-parser');
var https = require('https');
var app = express();

require('dotenv').load;

app.set('port', process.env.PORT || 3000);

app.use(express.static('dist'));
app.use(bodyParser.json());

mailer.extend(app, {
    from: process.env.EMAIL_FROM,
    host: process.env.EMAIL_HOST,
    secureConnection: process.env.EMAIL_SECURE,
    port: process.env.EMAIL_PORT,
    transportMethod: process.env.EMAIL_TRANSPORT,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

app.post('/mail', function(req, res) {
    //email regex
    var regex_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    //check content
    var msg = req.body;
    console.log(msg);

    if (!msg.name || !msg.email || !msg.message || !msg['g-recaptcha-response']) {
        res.status(201).send({ status: 'FAILED', message: 'Need to provide name, email, message, and valid captcha response'});
        return;
    }

    if (!regex_email.test(msg.email)) {
        res.status(201).send({ status: 'FAILED', message: 'Email needs to be in the correct email format'});
        return;
    }

    if (msg.message.length > 1000) {
        res.status(201).send({ status: 'FAILED', message: 'Message needs to be less than 1000 characters'});
    }

    //check recaptcha
    verifyRecaptcha(msg['g-recaptcha-response'], function(success) {
        if (!success) {
            res.status(201).send({ status: 'FAILED', message: 'Invalid Recaptcha response'});
            return;
        }
        
         

        //send email

        res.status(200).send({ status: 'OK' });
    });
});

app.listen(app.get('port'), function() {
   console.log('App running on port ' + app.get('port')); 
});

// Helper function to make API call to recatpcha and check response
function verifyRecaptcha(key, callback) {
    https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.RECAPTCHA_SECRET + "&response=" + key, function(res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk.toString();
        });
        res.on('end', function() {
            try {
                var parsedData = JSON.parse(data);
                console.log(parsedData);
                callback(parsedData.success);
            } catch (e) {
                callback(false);
            }
        });
    });
}
