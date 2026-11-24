export default function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-header">
          <span className="section-number text-highlight">02</span>
          <h2 className="section-title roll-text text-highlight">
            Top Projects
          </h2>
          <div className="section-line" />
        </div>
        <div className="projects-showcase">
          <div className="project-card-large">
            <img src="./assets/skymart.png" alt="Project Screenshot" />
            <div className="project-details">
              <div className="project-meta">
                <span className="project-category text-highlight">
                  E-Commerce
                </span>{" "}
                <span className="project-year text-highlight">2026</span>
              </div>
              <h3 className="project-title roll-text">SKYMART</h3>
              <p className="project-description">
                Premium e-commerce platform with seamless checkout, inventory
                management.
              </p>
              <div className="project-tech">
                <span className="tech-pill">HTML5</span>{" "}
                <span className="tech-pill">CSS3</span>{" "}
                <span className="tech-pill">JavaScript</span>{" "}
                <span className="tech-pill">React</span>{" "}
                <span className="tech-pill">Redux</span>
              </div>
            </div>
          </div>
          <div className="project-card-large reverse">
            <img src="./assets/fintek.png" alt="Project Screenshot" />
            <div className="project-details">
              <div className="project-meta">
                <span className="project-category text-highlight">
                  EXPENCE TRACKER
                </span>{" "}
                <span className="project-year text-highlight">2026</span>
              </div>
              <h3 className="project-title roll-text text">FINTEK-PRO</h3>
              <p className="project-description">
                Real-time analytics dashboard with advanced data visualization
                and collaborative features.
              </p>
              <div className="project-tech">
                <span className="tech-pill">HTML5</span>{" "}
                <span className="tech-pill">CSS3</span>{" "}
                <span className="tech-pill">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="project-card-large">
            <img src="./assets/SSGN.png" alt="Project Screenshot" />
            <div className="project-details">
              <div className="project-meta">
                <span className="project-category">E - COMMERCE</span>{" "}
                <span className="project-year">2026</span>
              </div>
              <h3 className="project-title roll-text">SSGN SHOP</h3>
              <p className="project-description">
                A modern e-commerce platform with a focus on user experience,
                responsive design, and secure payment integration.
              </p>
              <div className="project-tech">
                <span className="tech-pill">HTML5</span>{" "}
                <span className="tech-pill">CSS3</span>{" "}
                <span className="tech-pill">JavaScript</span>{" "}
                <span className="tech-pill">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
