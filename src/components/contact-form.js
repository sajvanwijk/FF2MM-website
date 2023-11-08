import React from "react";
import { useState } from "react";
import sanitizeHtml from "sanitize-html";

import { getContactPage } from "../sanity";

const pagecontent = await getContactPage();


const ContactForm = (props) => {
    const [onderwerp, setOnderwerp] = useState("");
    const [bericht, setBericht] = useState("");

    const handleSubmit = (e) => {
        setOnderwerp(encodeURI(sanitizeHtml(onderwerp)));
        setBericht(encodeURI(sanitizeHtml(bericht)));
        window.location.href =
        `mailto:${pagecontent.email_address}?subject=${onderwerp}&body=${bericht}%0D%0D`;
    };
  return (
    <div className="contact-form-container">
      <span className="contact-heading BigCard-Heading">
        {pagecontent.msgbox_header}
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
        {pagecontent.msgbox_btn}
      </button>
    </div>
  );
};

export default ContactForm;
