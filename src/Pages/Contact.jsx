import React from "react";

function Contact() {
  return (
    <section className="Contact">
      <div className="container Contact__div">
        <p className="Contact__title">Contact</p>
        <form action="#" className="Contact__form">
          <input type="text" placeholder="Name" className="Contact__input" />
          <input type="email" placeholder="Email" className="Contact__input" />
          <textarea
            placeholder="Message"
            className="Contact__input message-area"
          />
          <div className="Contact__item">
            <a href="#" className="Contact__link">
              Send
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
