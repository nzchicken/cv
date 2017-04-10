import template from './src/index.hbs';
import data from './data/index.json';
import WindowHandlers from './src/js/windowHandlers';
import FormHandlers from './src/js/formHandlers.js';

import './src/scss/styles.scss';

document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.innerHTML = template(data);
    document.body.appendChild(div);

    new WindowHandlers().registerHandlers();
    new FormHandlers().registerHandlers();
});
