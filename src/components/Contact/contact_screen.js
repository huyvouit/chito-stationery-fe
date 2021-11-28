import React, { useState } from "react";
import contactApi from "../../api/contact_api";
import { toast } from "react-toastify";
import "../../style/Contact/Contact.css";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";

function ContactScreen() {
  const [contact, setContact] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });
  const { email, firstName, lastName, message } = contact;
  //function onChange Input Form
  const onChangeContactForm = (event) =>
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });

  const submitContact = async (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    const contactForm = {
      email,
      name: firstName + " " + lastName,
      message,
    };
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
  };

  const [validationMsg, setValidationMsg] = useState({});

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Please input your email.";
    } else if (isEmail(email)) {
      msg.email = "Email is invaid.";
    }
    if (isEmpty(firstName)) {
      msg.firstName = "Please input your first name.";
    }
    if (isEmpty(lastName)) {
      msg.lastName = "Please input your last name.";
    }
    if (isEmpty(message)) {
      msg.message = "Please input your message.";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <p>Please get in touch if you have any questions or feedback.</p>
      <form>
        <div className="contact-txt_field">
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChangeContactForm}
            autoFocus
          />

          <span></span>
          <label>EMAIL*</label>
          <p style={{ color: "red" }}>{validationMsg["email"]}</p>
        </div>
        <div className="contact-fullName">
          <div className="contact-txt_field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChangeContactForm}
            />

            <span></span>

            <label>FIRST NAME*</label>
            <p style={{ color: "red" }}>{validationMsg["firstName"]}</p>
          </div>

          <div className="contact-txt_field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChangeContactForm}
            />
            <p style={{ color: "red" }}>{validationMsg["lastName"]}</p>
            <span></span>
            <label>LAST NAME*</label>
          </div>
        </div>
        <div className="contact-message">
          <label>MESSAGE*</label>
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={onChangeContactForm}
          />
          <p style={{ color: "red" }}>{validationMsg["message"]}</p>
        </div>
        <button className="submit" onClick={submitContact}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ContactScreen;
