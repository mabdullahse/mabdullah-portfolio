import React from "react";

import "./SocialIcons.scss";

function SocialIcons() {
  return (
    <div className="social">
      <a
        target="_blank"
        href="https://stackoverflow.com/users/9572033/mabdullahse"
        rel="noreferrer"
      >
        <img
          src="assets/images/contact/stack-overflow.svg"
          alt="stack-overflow"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/mabdullahse/"
        rel="noreferrer"
      >
        <img src="assets/images/contact/linkedin-logo.svg" alt="linkedin" />
      </a>

      <a target="_blank" href="https://github.com/mabdullahse" rel="noreferrer">
        <img src="assets/images/contact/github.svg" alt="Github logo" />
      </a>
      <a
        target="_blank"
        href="https://mabdullahse.medium.com/"
        rel="noreferrer"
      >
        <img src="assets/images/contact/medium.svg" alt="Medium Logo" />
      </a>
    </div>
  );
}

export default SocialIcons;
