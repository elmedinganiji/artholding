import React, { useState } from "react";
import './App.css';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <div className="text-">Thank you!</div>
        <div className="text-">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="container1">
         <h2>Send us an email</h2>
  <form action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank">
  <div className="row">
    <div className="col-25">
      <label for="fname">First Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" required name="firstname" placeholder="Your name.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname" required placeholder="Your last name.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="lname">Email</label>
    </div>
    <div className="col-75">
      <input type="email" id="email" name="email" required placeholder="Your email.."/>
    </div>
  </div>
  
  <div className="row">
    <div className="col-25">
      <label for="subject">Subject</label>
    </div>
    <div className="col-75">
      <textarea id="subject" required name="subject" placeholder="Write something.."></textarea>
    </div>
  </div>
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>

  );
};

export default ContactForm;