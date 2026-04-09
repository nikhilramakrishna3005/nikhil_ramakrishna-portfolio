import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:nikhilrk3005@gmail.com"
                data-cursor="disable"
              >
                nikhilrk3005@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+12272188373" data-cursor="disable">
                +1 (227) 218-8373
              </a>
            </p>
            <p>Washington, DC</p>
            <p>
              <a
                href="https://www.linkedin.com/in/nikhil-rama-krishna3005/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — nikhil-rama-krishna3005
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/nikhilramakrishna3005"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-rama-krishna3005/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Nikhil Rama Krishna</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;