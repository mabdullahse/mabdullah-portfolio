import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import SocialIcons from "./../contact/SocialIcons";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 200,
      backSpeed: 60,
      strings: [
        "Angular Developer",
        "ReactJS Developer",
        "NodeJS Developer",
        "AWS Certified Cloud Practitioner",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mabdullah.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Muhammad Abdullah</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="description">
            <img
              src="assets/images/intro/intro-description.svg"
              alt="M Abdullah intro"
            />
          </div>

          <div className="contact-us-link">
            <a href="#contact">Let's Chat!</a>
          </div>
        </div>
        <a className="move-down" href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
