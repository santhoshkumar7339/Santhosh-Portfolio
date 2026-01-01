import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Get In Touch</h2>
        <span className="underline"></span>
      </div>

      <h3 className="contact-title">Let's Work Together</h3>

      <p className="contact-desc">
        I’m open to opportunities, internships, and creative projects.
        Feel free to reach out for collaborations or design work.
      </p>

      <div className="contact-grid">
        {/* Phone */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <div>
            <h4>Phone</h4>
            <a href="tel:+917339372322">+91 73393 72322</a>
          </div>
        </div>

        {/* Email */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div>
            <h4>Email</h4>
            <a href="mailto:santhoshkumar22033@gmail.com">
              santhoshkumar22033@gmail.com
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaGithub />
          </div>
          <div>
            <h4>GitHub</h4>
            <a
              href="https://github.com/santhoshkumar7339"
              target="_blank"
              rel="noreferrer"
            >
              github.com/santhoshkumar7339
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaLinkedinIn />
          </div>
          <div>
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/santhosh-kumar-6713b8395"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/santhosh-kumar-6713b8395
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

