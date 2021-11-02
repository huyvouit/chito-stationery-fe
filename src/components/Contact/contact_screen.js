import React,{ useState } from 'react'
import contactApi from '../../api/contact_api';
import { toast } from "react-toastify";
import '../../style/Contact/Contact.css'

function ContactScreen() {
    
    const [contact, setContact] = useState({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
    });
    const { email, firstName,lastName, message } = contact;
    //function onChange Input Form
    const onChangeContactForm = (event) =>
        setContact({
            ...contact,
            [event.target.name]: event.target.value,
    });

    const submitContact = async (event) => {
        event.preventDefault();
        const contactForm = {
            email,
            name: firstName + " " + lastName,
            message,
        }
        try {
            const response = await contactApi.postContact(contactForm);
            console.log(response.data);
            if (response.data.success) {
                toast.success(response.data.msg, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
            } else {
                toast.error(response.data.error, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
            }
        } catch (error) {
            console.log(error.response.data);
            if (error.response.data) return error.response.data;
        }

    }

    return (
        <div className="contact">
            <h1>CONTACT</h1>
            <p>Please get in touch if you have any questions or feedback.</p>
            <form>
                <div className="contact-txt_field">
                        <input type="email"
                            name="email"
                            value={email}
                            onChange={onChangeContactForm}
                            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                            required  autoFocus/>
                        <span></span>
                        <label>EMAIL*</label>
                    </div>
                <div className="contact-fullName">
                    <div className="contact-txt_field">
                        <input type="text"
                            name="firstName"
                            value={firstName}
                            onChange={onChangeContactForm}
                            required />
                        <span></span>
                        <label>FIRST NAME*</label>
                    </div>
                    <div className="contact-txt_field">
                        <input type="text" 
                            name="lastName"
                            value={lastName}
                            onChange={onChangeContactForm}
                            required />
                        <span></span>
                        <label>LAST NAME*</label>
                    </div>
                </div>
                <div className="contact-message">
                    <label>MESSAGE*</label>
                    <textarea type="text" 
                        name="message"
                        value={message}
                        onChange={onChangeContactForm}
                        required />
                </div>
                <button className="submit" onClick={submitContact}>
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default ContactScreen;
