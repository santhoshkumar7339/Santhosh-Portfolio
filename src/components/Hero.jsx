import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <h1>
        Hi, I'm <span>Santhosh Kumar</span>
      </h1>

      <h2>Graphic Designer</h2>

      <p>
        A creative Graphic Designer specializing in artwork design, digitizing, namedrop, and print-ready visuals.

        I’m currently pursuing professional training at Artpro Graphics, where I work on creating visually compelling designs for both print and digital media.
      </p>
      <div className="hero-buttons">
        <button
          className="btn-primary"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </button>

        <button
          className="btn-secondary"
          onClick={() => scrollToSection("projects")}
        >
          View My Work
        </button>
      </div>

      <div className="scroll"><a href="#contact"><FaChevronDown /></a></div>

    </section>
  );
}