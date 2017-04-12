const FORM_FIELDS = [ 'name', 'email', 'message' ];

class FormHandlers {

    constructor(data) {
        this.mailerEndpoint = data.mailerEndpoint;
        this.payload = {};    
    }

    registerHandlers() {
        this.contactForm = document.getElementById('contactForm');
        this.contactForm.addEventListener('submit', this.validate.bind(this), true);
    }

    validate(event) {
        event.preventDefault();
        if (this.hasValidForm()) {
            grecaptcha.execute();
        }
    }

    submitMailer(token) {
        this.contactForm.classList.toggle('active', true);

        const data = this.generatePayload(token);

        fetch(this.mailerEndpoint, {
            method: 'post',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error("Bad response from server");
            }
            return response;
        })
        .then(response => response.json())
        .then(response => {
            clearForm(contactForm);
            this.setMessage('Thank you for your contact', false);
        })
        .catch(error => {
            this.setMessage('Failed to send message. Please contact me on one of the above options', true);
        })
        .then(() => {
            this.contactForm.classList.toggle('active', false);    
        });
    }

    hasValidForm() {
        //make sure all form fields are filled in. if not, mark field as invalid and reject
        //return whether the form is valid or not

        return FORM_FIELDS.reduce((accumulator, currentValue) => {
            const element = this.contactForm.querySelector('[name=' + currentValue + ']');

            const hasValue = !!element.value;
            element.classList.toggle('is-invalid', !hasValue);

            return accumulator && hasValue;
        }, true);
    }

    generatePayload(token) {
        return FORM_FIELDS.reduce((accumulator, currentValue) => {
            const element = this.contactForm.querySelector('[name=' + currentValue + ']');

            accumulator[currentValue] = element.value;
            return accumulator;
        }, { 'recaptcha_response' : token });
    }

    clearForm() {
        FORM_FIELDS.map(field => {
            const element = this.contactform.querySelector('[name=' + field + ']');
            element.value = '';
            element.classList.toggle('is-invalid', false);
        });

        grecaptcha.reset();
    }

    setMessage(message, isError) {
        const messageBox = this.contactForm.getElementsByClassName('message')[0];

        messageBox.innerHTML = message;
        messageBox.classList.toggle('is-error', message && isError);
        messageBox.classList.toggle('is-success', message && !isError);
    }
}

export default FormHandlers;
