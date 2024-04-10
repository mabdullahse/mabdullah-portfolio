import "./contact.scss";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Reach out Directly.</h2>
        <SocialIcons />

        <div style={{ textAlign: "left" }}>
          <h3>Payoneer info</h3>
          <p>
            {" "}
            This website is owned and operated by <b>Muhammad Abdullah</b>
          </p>
          <p>
            Payoneer email is <b>mabdullah.se@gmail.com</b> and phone number is{" "}
            <b>+923054314377</b>
          </p>

          <p>
            My Address is:{" "}
            <b>Street No 3 Al badar colony cantt road Mailsi Pakistan </b> (ZIP
            code: 61200){" "}
          </p>
        </div>
        <h2>Ciao........</h2>
      </div>
      <div className="right">
        <img src="assets/images/contact/contact-us.svg" alt="contact-us" />
      </div>
    </div>
  );
}
