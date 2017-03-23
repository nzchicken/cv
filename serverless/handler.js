'use strict';
const AWS = require('aws-sdk');

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

module.exports.sendMail = (event, context, callback) => {

    validateResponse(event)
        .then(checkRecaptcha) 
        .then(sendEmail)
        .then(() => {
            callback(null, generateResponse('OK', 200, 'Sent Email'));
        })
        .catch(err => {
            callback(null, generateResponse('FAILED', 400, err.message));
        });
};

function validateResponse(event) {
    return new Promise((resolve, reject) => { 
        const { name, email, message, recaptcha_response } = event.body;

        if (!name || !email || !message || !recaptcha_response)
            reject(new Error('Need to provide name, email, message, and valid captcha response'));

        if (!EMAIL_REGEX.test(email))
            reject(new Error('Email needs to be in the correct email format'));

        if (message.length > 1000)
            reject(new Error('Message needs to be less than 1000 characters'));

        resolve(event);
    });
}

function checkRecaptcha(event) {
    const { recaptcha_response } = event.body;
    const url ="https://www.google.com/recaptcha/api/siteverify?response=" + recaptcha_response + "&secret=" + process.env.RECAPTCHA_SECRET;

    return fetch(url, { method: 'post' })
        .then(response => response.json())
        .then(response => {
            if (!response.success) return new Error('Invalid recaptcha response');
            return event;
        })
}

function sendEmail(event) {
    const { name, email, message } = event.body;
    const  emailMessage = 'From: ' + name + '\n' +
        'Email: ' + email + '\n' + 
        'Message: ' + message;

    const ses = new AWS.SES();


    return ses.sendEmail({
        Destination: {
            ToAddresses: [ process.env.EMAIL_TO ],
        },
        Message: {
            Body: {
                Text: { Data: emailMessage }
            },
            Subject: {
                Data: 'Message from ' + name + ' on your website'
            }
        },
        Source: process.env.EMAIL_FROM
    }).promise();
}

function generateResponse(status, statusCode, message) {
    return {
        statusCode: statusCode,
        body: JSON.stringify({
            status,
            message
        })
    };
}
