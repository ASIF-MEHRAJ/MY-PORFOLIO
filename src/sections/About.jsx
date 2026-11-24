export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number text-highlight">01</span>
          <h2 className="section-title roll-text text-highlight">About</h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="about-large-text roll-text">
            I create digital experiences that blend aesthetics with function.
          </div>
          <div className="about-content">
            <p className="about-intro">
              Hi, I'm <span className="text-highlight">Asif Mehraj</span> — a
              web developer and creative designer crafting digital experiences
              that feel as good as they look.
            </p>
            <p className="about-detail">
              I build fast, responsive, and visually striking websites using
              HTML, CSS, JavaScript, React and GSAP. My focus is on blending
              clean code with thoughtful design so every project ships with both
              performance and personality.
              <br />
              Based in <span className="text-highlight">Kashmir</span>, I work
              with brands and individuals to turn ideas into interactive,
              memorable interfaces — from concept and layout to motion and final
              build.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number text-highlight" data-target="10">
                  0
                </span>{" "}
                <span className="stat-suffix">+</span>{" "}
                <span className="stat-label">Projects Made</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-highlight" data-target="5">
                  0
                </span>{" "}
                <span className="stat-suffix">+</span>{" "}
                <span className="stat-label">Months Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
