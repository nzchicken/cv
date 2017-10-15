import React from 'react'

const ContactForm = props => (
    <div>
        <div>
            <div>
                <p><strong>Email:</strong> <a href="mailto:nayben@gmail.com">nayben@gmail.com</a></p>
            </div>
            <div>
                <p><strong>Mobile:</strong>+31 6 4130 6547</p>
            </div>
        </div>
        <div>
            <h6>Send me a message:</h6>
        </div>
        <form>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder="test@example.com" />
                </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea name="message"></textarea>
            <div id="g-captcha"
               
                data-sitekey=""
                data-callback="recaptchaCallback"
                data-size="invisible">
            </div>
            <button>
                Submit
                <i></i> 
            </button>
            <p></p>
        </form>
    </div>
)

export default ContactForm
