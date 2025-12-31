import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Featured Projects</h2>
        <span className="underline"></span>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        <div className="project-item">
          <img src="Project_1.svg" alt="Project 1" className="project-photo" />
          <h3>Typography</h3>
        </div>
        <div className="project-item">
          <img src="Project_2.svg" alt="Project 2" className="project-photo" />
          <h3>Colour Gradient</h3>
        </div>
        <div className="project-item">
          <img src="Project_3.svg" alt="Project 3" className="project-photo" />
          <h3>Colour Seperation</h3>
        </div>
        <div className="project-item">
          <img src="Project_4.svg" alt="Project 4" className="project-photo" />
          <h3>Re-Draw</h3>
        </div>
        <div className="project-item">
          <img src="Project_5.svg" alt="Project 4" className="project-photo" />
          <h3>Logo Model</h3>
        </div>

      </div>
    </section>
  );
}
