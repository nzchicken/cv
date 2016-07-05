var contactForm;
var formFields = [ 'name', 'email', 'message' ];
var formSubmit;
var messageBox;

document.addEventListener('DOMContentLoaded', function() {
    contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', submitMailer, true);
    formSubmit = document.getElementById('submitContact');
    messageBox = contactForm.getElementsByClassName('message')[0];
});

function submitMailer(evt) {
    evt.preventDefault();
   
    formSubmit.classList.add('active');

    var validForm = true;

    var req = {};
    formFields.forEach(field => { 
        var val = getFormFieldValue(contactForm, field);
        req[field] = val; 
        validForm &= val;
    });
   
    req.recaptcha_response = grecaptcha.getResponse();
    
    fetch('/mail', {
        method: 'post',
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(req)
    }).then(response => {
        if (response.status >= 400 && response.status < 600) {
            throw new Error("Bad response from server");
        }
        return response;
    }).then(response => {
        response.json();
    }).then(response => {
        clearForm(contactForm);
        setMessage('Thank you for your contact', false);
    }).catch(error => {
        setMessage('Failed to send message. Please contact me on one of the above options', true);
    });
    
    return false;
}

function clearForm(form) {
    var elems = form.querySelectorAll('input[name="name"],input[name="email"],textarea[name="message"]');
    for(var i = 0; i< elems.length; i++) {
        elems[i].value = '';
        elems[i].classList.remove('is-invalid');
    }
    grecaptcha.reset();
}

function setMessage(message, isError) {
    messageBox.classList.toggle('is-error', isError);
    messageBox.classList.toggle('is-success', !isError);
    messageBox.innerHTML = message;
    formSubmit.classList.remove('active');
}

function getFormFieldValue(form, fieldName) {
    var elem = form.querySelector('[name="' + fieldName + '"]');
    
    elem.classList.toggle('is-invalid', !elem.value);
    return elem.value;
}
