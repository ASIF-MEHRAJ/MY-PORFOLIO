export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave footer-wave-one" />
      <div className="footer-wave footer-wave-two" />
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#hero"
              className="footer-logo footer-name"
              aria-label="Asif Mehraj"
            >
              Asif Mehraj
            </a>
            <p className="footer-text">Creating premium digital experiences.</p>
          </div>
          <div className="footer-navigation">
            <span className="footer-label">NAVIGATION</span>{" "}
            <a href="#about">About</a> <a href="#work">Work</a>{" "}
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-cta">
            <span className="footer-label">LET'S CREATE</span>
            <h3>Let's create something great.</h3>
            <a href="#contact" className="footer-cta-button">
              <span>START A PROJECT</span>{" "}
              <span className="footer-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Asif Mehraj. All rights reserved.
          </p>
          <a href="#hero" className="back-to-top" aria-label="Back to top">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="22"
              height="22"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
