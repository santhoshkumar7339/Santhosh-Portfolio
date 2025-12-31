import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="education-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Education</h2>
        <span className="underline"></span>
      </div>

      <div className="education-list">
        {/* Item 1 */}
        <div className="education-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <h3>Kanchi Sri Krishna College of Arts and Science</h3>
            <span className="edu-location">Kanchipuram</span>

            <p className="edu-degree">Bachelor of Science in Computer Science</p>

            <div className="edu-meta">
              <span>2020 – 2023</span>
              <span className="cgpa">Percentage: 70%</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="education-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <h3>Anderson Higher Secondary School</h3>
            <span className="edu-location">Kanchipuram</span>

            <p className="edu-degree">Higher Secondary Education - HSC</p>

            <div className="edu-meta">
              <span>2018 – 2019</span>
              <span className="cgpa">Percentage: 51%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
