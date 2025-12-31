import {
  FaCode,
  FaLayerGroup,
  FaTerminal,
  FaPalette,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Skills & Expertise</h2>
        <span className="underline"></span>
      </div>

      {/* Cards */}
      <div className="skills-grid">
        <div className="skill-card">
          <FaCode className="skill-icon" />
          <h3>Graphic Design</h3>
          <ul>
            <li>Artwork design for print and digital media</li>
            <li>Posters, banners, and promotional creatives</li>
            <li>Branding basics and visual identity support</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaLayerGroup className="skill-icon" />
          <h3>Print & Production</h3>
          <ul>
            <li>Digitizing designs for print and embroidery</li>
            <li>Namedrop design and placement</li>
            <li>Print preparation and quality checking</li>
            <li>Color correction and print-ready artwork</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaTerminal className="skill-icon" />
          <h3>Design Support</h3>
          <ul>
            <li>Assisting senior designers with layouts</li>
            <li>Ensuring visual consistency and accuracy</li>
            <li>Improving designs based on feedback</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
