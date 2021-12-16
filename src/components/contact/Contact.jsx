import { useState } from "react";
import "./contact.scss";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Reach out Directly.</h2>

        <SocialIcons />
      </div>
      <div className="right">
        <img src="assets/images/contact/contact-us.svg" alt="contact-us" />
      </div>
    </div>
  );
}
