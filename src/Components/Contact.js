import React from 'react';

function Contact() {
  return (
    <div className="pageOpener">
      <h1>Contact Us</h1>
      <form className="contact">
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
      </form>
      <button>Submit</button>
    </div>
  );
}

export default Contact;
