'use strict';
const AWS = require('aws-sdk');
const fetch = require('node-fetch');

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

module.exports.sendMail = (event, context, callback) => {

    const body = JSON.parse(event.body);

    validateResponse(body)
        .then(checkRecaptcha) 
        .then(sendEmail)
        .then(() => {
            callback(null, generateResponse('OK', 200, 'Sent Email'));
        })
        .catch(err => {
            callback(null, generateResponse('FAILED', 400, err.message));
        });
};

function validateResponse(body) {
    return new Promise((resolve, reject) => { 
        const { name, email, message, recaptcha_response } = body;

        if (!name || !email || !message || !recaptcha_response)
            reject(new Error('Need to provide name, email, message, and valid captcha response'));

        if (!EMAIL_REGEX.test(email))
            reject(new Error('Email needs to be in the correct email format'));

        if (message.length > 1000)
            reject(new Error('Message needs to be less than 1000 characters'));

        resolve(body);
    });
}

function checkRecaptcha(body) {
    const { recaptcha_response } = body;
    const url ="https://www.google.com/recaptcha/api/siteverify?response=" + recaptcha_response + "&secret=" + process.env.RECAPTCHA_SECRET;

    return fetch(url, { method: 'post' })
        .then(response => response.json())
        .then(response => {
            if (!response.success) throw new Error('Invalid recaptcha response');
            return body;
        })
}

function sendEmail(body) {
    const { name, email, message } = body;
    const  emailMessage = 'From: ' + name + '\n' +
        'Email: ' + email + '\n' + 
        'Message: ' + message;

    const ses = new AWS.SES();


    return ses.sendEmail({
        Destination: {
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
