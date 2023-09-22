import React from "react";
import { useState } from "react";
import sanitizeHtml from "sanitize-html";


const ContactForm = (props) => {
    const [onderwerp, setOnderwerp] = useState("");
    const [bericht, setBericht] = useState("");

    const handleSubmit = (e) => {
        setOnderwerp(encodeURI(sanitizeHtml(onderwerp)));
        setBericht(encodeURI(sanitizeHtml(bericht)));
        window.location.href =
        `mailto:feelfree2makemusic@gmail.com?subject=${onderwerp}&body=${bericht}%0D%0D`;
    };
  return (
    <div className="contact-form-container">
      <span className="contact-heading BigCard-Heading">
        Schrijf hier je bericht
      </span>
        <input
          value={onderwerp}
          onChange={(e) => setOnderwerp(e.target.value)}
          type="text"
          required="true"
          placeholder="Onderwerp"
          className="contact-name input"
        />
      <textarea
        value={bericht}
        onChange={(e) => setBericht(e.target.value)}
        placeholder="Uw bericht"
        className="contact-message textarea"
      ></textarea>
      <button
        onClick={handleSubmit}
        formAction=""
        className="contact-cta-btn Anchor button"
      >
        Verstuur via email
      </button>
    </div>
  );
};

export default ContactForm;
