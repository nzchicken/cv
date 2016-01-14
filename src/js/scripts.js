var nav;
var navOffset;
var contactForm;

document.addEventListener('DOMContentLoaded', function() {
    //DOM ready
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', submitMailer, true);
    nav = document.getElementsByTagName('nav')[0];
    onResize();
});


function onResize() {
    document.body.classList.remove('nav-docked');
    navOffset = nav.offsetTop; 
    onScroll();
}

function onScroll() {
    document.body.classList.toggle('nav-docked', navOffset <= window.pageYOffset);
}

function submitMailer(evt) {
    evt.preventDefault();
    
    var formFields = [ 'name', 'email', 'message' ];

    var req = {};

    var validForm = true;
    formFields.forEach(field => { var val = getFormFieldValue(contactForm, field); req[field] = val; validForm &= val });

    req.recaptcha_response = grecaptcha.getResponse();

    
    //replace with fetch
    fetch('/mail', {
        method: 'post',
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(req)
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log('success', response); 
    })
    .catch(error => {
        console.log('error', error);
    });
    
    return false;
}

function clearForm() {

}

function getFormFieldValue(form, fieldName) {
    var elem = form.querySelector('[name="' + fieldName + '"]');
    
    elem.classList.toggle('invalid', !elem.value);
    console.log(elem.value); 
    return elem.value;
}
