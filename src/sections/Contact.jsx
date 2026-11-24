export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-number text-highlight">05</span>
          <h2 className="section-title roll-text text-highlight">Contact</h2>
          <div className="section-line" />
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading roll-text">
              Let's build something extraordinary together.
            </h3>
            <p className="contact-text text-highlight roll-text">
              Have a project in mind? I'd love to hear about it. Let's create
              something that stands out.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>{" "}
                <a href="mailto:hello@example.com" className="contact-value">
                  asifmehraj456@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>{" "}
                <a href="tel:+1234567890" className="contact-value">
                  UNAVAILIBLE
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>{" "}
                <span className="contact-value">India, Jammu and Kashmir</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/ASIF-MEHRAJ" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.08.77 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/asif-mehraj-005932406/"
                className="social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.18h.05c.53-1.01 1.84-2.18 3.79-2.18C19.23 8 21 10.08 21 13.77V24h-4v-8.09c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27V24h-4V8z" />
                </svg>
              </a>{" "}
              <a href="https://x.com/asifmehraj3214" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68L14.54 10.34 24 22.846h-7.406l-5.8-7.584-6.64 7.584H.472l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.295 19.482h2.04L6.486 3.258H4.298L17.606 20.635Z" />
                </svg>
              </a>
            </div>
          </div>
          <form className="contact-form" id="contactForm">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  placeholder="Your Name"
                  required
                />{" "}
                <label htmlFor="name" className="form-label" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder="Your Email"
                  required
                />{" "}
                <label htmlFor="email" className="form-label" />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                id="subject"
                placeholder="Subject"
                required
              />{" "}
              <label htmlFor="subject" className="form-label" />
            </div>
            <div className="form-group">
              <textarea
                className="form-input form-textarea"
                id="message"
                placeholder="Your Message"
                required
              />{" "}
              <label htmlFor="message" className="form-label" />
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <span className="btn-text">
                <a href="mailto:asifmehraj456@gmail.com">Send Message</a>
              </span>{" "}
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
