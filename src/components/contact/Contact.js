import React, { useState } from "react";
import "./contact.scss";
import Iframe from "react-iframe";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    document.getElementById("myForm").reset();
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="left">
          <i className="fa-solid fa-address-book"></i>
          <p>
            <span>Lorem@stbsicar.com</span>
          </p>
          <p>Tel : +12326485151818</p>
          <p>tunis, 1000, avenue bourguiba, tunisia</p>
        </div>
        <div className="right">
          <form id="myForm" onSubmit={handleSubmit}>
            <h2>contact</h2>
            <div className="inputBox">
              <input type="text" placeholder="your name" required />
              <input type="email" placeholder="your email" required />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="your number" required />
              <input type="text" placeholder="subject" required />
            </div>
            <textarea name="" placeholder="your message" required />
            <button className="btnSend">envoyez</button>
            {message && <span> envoyé:) </span>}
          </form>
        </div>
      </div>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12772.083083017362!2d10.2011826!3d36.8419786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89c29f6c6d8069d8!2sSTB%20Sicar!5e0!3m2!1sfr!2stn!4v1646041242035!5m2!1sfr!2stn"
        width="900"
        height="250"
        allowfullscreen=""
        loading="eager"
        // loading="lazy"
        id="map_adress"
      />
    </>
  );
};

export default Contact;
