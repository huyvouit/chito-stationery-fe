import React from 'react'
import './Contact.css'

function ContactScreen() {
    return (
        <div className="contact">
            <h1>CONTACT</h1>
            <p>Please get in touch if you have any questions or feedback.</p>
            <form method="post" action="">
                <div className="contact-txt_field">
                        <input type="email" required />
                        <span></span>
                        <label>EMAIL*</label>
                    </div>
                <div className="contact-fullName">
                    <div className="contact-txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>FIRST NAME*</label>
                    </div>
                    <div className="contact-txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>LAST NAME*</label>
                    </div>
                </div>
                <div className="contact-message">
                    <label>MESSAGE</label>
                    <textarea type="text" required />
                </div>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default ContactScreen;
