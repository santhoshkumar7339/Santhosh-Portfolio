export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <span className="underline"></span>
      </div>

      <div className="about-content">
        {/* Left Text */}
        <div className="about-text">
          <p>
            I’m Santhosh Kumar R, a passionate and detail-oriented Graphic Designer based in Kanchipuram, Tamil Nadu.
          </p>
          <p>
            I am currently pursuing professional graphic design training at Artpro Graphics, a multi-disciplinary creative agency specializing in artwork design, digitizing, namedrop, and print services. I enjoy transforming ideas into clean, visually engaging designs that meet both creative and technical requirements.
          </p>
          <p>
            With a background in Computer Science, I bring a structured and problem-solving approach to design. I focus on layout, color accuracy, typography, and print quality, and I am continuously improving my creative skills through hands-on experience and learning.

          </p>
          <p>
          I am a fast learner, adaptable, and enthusiastic about growing as a graphic designer in a professional creative environment.
          </p>

          <a href="/Santhosh Resume.pdf" download className="btn-primary">
            Download CV
          </a>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img
            src="Santhosh_Photo.svg"
            alt="Graphic Designer"
          />
        </div>
      </div>
    </section>
  );
}

