import template from './src/index.hbs';
import data from './data/index.json';
import WindowHandlers from './src/js/windowHandlers';
import FormHandlers from './src/js/formHandlers';

import './src/scss/styles.scss';

const windowHandler = new WindowHandlers();
const formHandler = new FormHandlers(data);


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); 

document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.innerHTML = template(data);
    document.body.appendChild(div);

    ga('create', data.analyticsTrackingCode, 'auto');
    ga('send', 'pageview');

    windowHandler.registerHandlers();
    formHandler.registerHandlers();
});

//window function for recaptcha callback
window.recaptchaCallback = function(token) {
    formHandler.submitMailer(token);
}
