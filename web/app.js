import template from './src/index.hbs';
import data from './data/index.json';
import WindowHandlers from './src/js/windowHandlers';
import FormHandlers from './src/js/formHandlers';

import './src/scss/styles.scss';

const windowHandler = new WindowHandlers();
const formHandler = new FormHandlers(data);

document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.innerHTML = template(data);
    document.body.appendChild(div);

    windowHandler.registerHandlers();
    formHandler.registerHandlers();
});

//window function for recaptcha callback
window.recaptchaCallback = function(token) {
    formHandler.submitMailer(token);
}
