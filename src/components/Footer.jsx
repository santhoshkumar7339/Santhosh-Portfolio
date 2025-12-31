import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-logo"></span> Santhosh Kumar R
        </div>

        <div className="footer-icons">
          <a href="https://github.com/santhoshkumar7339" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:santhoshkumar22033@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-right">&copy; {new Date().getFullYear()} Santhosh Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
