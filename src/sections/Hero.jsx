export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-text">DEVELOPER</div>
      <div className="hero-bg-text-2">CREATIVE</div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">
            <span className="tag-line" />{" "}
            <span className="tag-text text-highlight">
              Available for projects
            </span>
          </div>
          <h1 className="hero-title">
            <span className="hero-line">
              <span className="hero-word roll-text">CREATIVE</span>
            </span>{" "}
            <span className="hero-line">
              <span className="hero-word roll-text">FRONTEND</span>
            </span>{" "}
            <span className="hero-line hero-outline">
              <span className="hero-word roll-text">
                <span className="text-highlight">ENGINEER</span>
              </span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Crafting premium digital experiences with elegant code and refined
            design. Based in Kashmir.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              View Projects
            </a>{" "}
            <a href="#contact" className="btn btn-outline">
              Start Project
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-perspective">
            <div className="hero-avatar">
              <div className="hero-avatar-inner">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="0.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="hero-card hero-card-1">
              <div className="card-screen">
                <img
                  src="./assets/projectshowcase1.jpg"
                  alt="Project Screenshot"
                />
              </div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="card-screen">
                <img
                  src="./assets/projectshowcase2.jpg"
                  alt="Project Screenshot"
                />
              </div>
            </div>
            <div className="hero-card hero-card-3">
              <img
                src="./assets/projectshowcase3.jpg"
                alt="Project Screenshot"
              />
            </div>
            <div className="hero-card hero-card-4">
              <img
                src="./assets/projectshowcase4.jpg"
                alt="Project Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
