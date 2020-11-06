import React from "react";
import "./Contact.css";

//This is a function created to generate the Footer
function Contact() {
  return (
    <div id="footer-wrapper">
      <div id="footer-container">
        <h6 id="footer-title">Contact Info for follow-ups!</h6>
        <div id="footer-bottom-wrapper">
          <div id="footer-left">
            <div>
              {" "}
              Contact Info:
              <ul>
                <li>Somewhere USA</li>
                <li>Small City</li>
                <li>Small Apartment</li>
                <li>Copyright Info:</li>
              </ul>
            </div>
          </div>
          <div id="footer-right">
            <div>
              Social Media:
              <ul>
                <li>FaceBook: placeholder</li>
                <li>Instagram: placeholder</li>
                <li> Youtube: placeholder</li>
                <li> Gmail: placeholder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export component as Contact
export default Contact;
