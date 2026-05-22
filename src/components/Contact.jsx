import React from "react";

function Contact() {

  return (

    <section id="contact" className="section contact-section">

      {/* GLOW EFFECT */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* TITLE */}
      <h2 className="title">
        Contact Me
      </h2>

      {/* SUBTITLE */}
      <p className="contact-subtitle">
        Have a project idea, collaboration or opportunity?
        Feel free to reach out and let's create something amazing together.
      </p>

      {/* CONTACT CONTAINER */}
      <div className="contact-container glass">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h3>
            Let's Connect
          </h3>

          <p>
            I’m always open to discussing new projects,
            creative ideas and opportunities to grow as a developer.
          </p>

          {/* INFO BOXES */}
          <div className="contact-box">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h4>Email</h4>
              <span>jannath@gmail.com</span>
            </div>

          </div>

          <div className="contact-box">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <h4>Location</h4>
              <span>Kerala, India</span>
            </div>

          </div>

          <div className="contact-box">

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <h4>Phone</h4>
              <span>+91 98765 43210</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">

          <div className="input-group">

            <input
              type="text"
              placeholder="Your Name"
              className="input"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="input"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            className="input"
          ></textarea>

          <button className="btn contact-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>

  );
}

export default Contact;