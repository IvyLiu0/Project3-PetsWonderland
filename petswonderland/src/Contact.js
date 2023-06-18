import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/petswonderland.css";
import "react-slideshow-image/dist/styles.css";
// import Swal from 'sweetalert2'

const contactImages = ["/products/contact.jpg"];

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const nameUpdate = (event) => {
    setName(event.target.value);
  };
  const emailUpdate = (event) => {
    setEmail(event.target.value);
  };
  const messageUpdate = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    const postURL = "/api/contact";
    fetch(postURL, {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    }).then(() => {
      alert("We receive your message. We will contact you soon. Thank you!");
      // Swal.fire('Any fool can use a computer');
    });
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <div>
        <img
          className="contactImg"
          src={contactImages}
          alt="contactImages"
        ></img>
      </div>
      <div className="contactForm">
        <form
          onSubmit={handleSubmit}
          className="mt-3 mb-5 p-3 bg-white contactForm"
        >
          <div>
            <h3 className="formTitle">Contact Us</h3>
            <label className="m-2">Name:</label>
            <br />
            <input
              required
              onChange={nameUpdate}
              type="text"
              name="name"
              placeholder="Your name"
            ></input>
            <br />
            <label className="m-2">Email:</label>
            <br />
            <input
              required
              onChange={emailUpdate}
              type="email"
              name="email"
              placeholder="Your Email"
            ></input>
            <br />
            <label className="m-2">Message:</label>
            <br />
            <textarea
              required
              onChange={messageUpdate}
              type="text"
              name="message"
              placeholder="Enter your message here..."
            />
            <br />
            <br />
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
