export default function Carousel() {
  return (
    <section className="carousel-section" id="carousel">
      <div className="carousel-header">
        <span className="section-number">03</span>
        <h2 className="section-title roll-text">Featured Projects</h2>
      </div>
      <div className="carousel-stage">
        <div
          className="carousel-card"
          data-index="0"
          data-url="https://sky-mart-ruddy.vercel.app/"
        >
          <div className="carousel-card-inner">
            <img
              className="carousel-card-image"
              src="./assets/project-skymart.png"
              alt="SkyMart project screenshot"
            />
            <div className="carousel-card-content">
              <span className="carousel-card-category">E-Commerce</span>
              <h3 className="carousel-card-title">SkyMart</h3>
              <p className="carousel-card-desc">
                A modern e-commerce storefront clone with product listings, cart
                flow and a clean shopping experience.
              </p>
              <span className="carousel-card-link">
                <a
                  href="https://sky-mart-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE ↗
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="carousel-card"
          data-index="1"
          data-url=" https://asif-mehraj.github.io/Dribble/"
        >
          <div className="carousel-card-inner">
            <img
              className="carousel-card-image"
              src="./assets/project-dribble.png"
              alt="Dribble project screenshot"
            />
            <div className="carousel-card-content">
              <span className="carousel-card-category text-highlights">
                Frontend Clone
              </span>
              <h3 className="carousel-card-title text-highlights">Dribble</h3>
              <p className="carousel-card-desc">
                A shopping cart web app focused on smooth product browsing, cart
                management and checkout interactions.
              </p>
              <span className="carousel-card-link">
                <a
                  href=" https://asif-mehraj.github.io/Dribble/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE ↗
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="carousel-card"
          data-index="2"
          data-url="https://productive-dashboard-seven.vercel.app/"
        >
          <div className="carousel-card-inner">
            <img
              className="carousel-card-image"
              src="./assets/productivity-dashboard.png"
              alt="Dashboard project screenshot"
            />
            <div className="carousel-card-content">
              <span className="carousel-card-category text-highlights">
                Web App
              </span>
              <h3 className="carousel-card-title text-highlights">Dashboard</h3>
              <p className="carousel-card-desc">
                A productivity dashboard with a to-do list, daily planner, focus
                timer, goal tracker and live weather.
              </p>
              <span className="carousel-card-link">
                <a
                  href="https://productive-dashboard-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE ↗
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="carousel-card"
          data-index="3"
          data-url="https://ssgn-shop.vercel.app/"
        >
          <div className="carousel-card-inner">
            <img
              className="carousel-card-image"
              src="./assets/project-ssgn.png"
              alt="SGSIN project screenshot"
            />
            <div className="carousel-card-content">
              <span className="carousel-card-category text-highlights">
                Streetwear
              </span>
              <h3 className="carousel-card-title text-highlights">SGSIN</h3>
              <p className="carousel-card-desc">
                A performance sneakers and streetwear store built around bold
                visuals for people who never slow down.
              </p>
              <span className="carousel-card-link">
                <a
                  href="https://ssgn-shop.vercel.app  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE ↗
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="carousel-card"
          data-index="4"
          data-url="https://tea-levels-and-a-bud.vercel.app/"
        >
          <div className="carousel-card-inner">
            <img
              className="carousel-card-image"
              src="./assets/product-towlevels.png"
              alt="Two Leaves and a Bud project screenshot"
            />
            <div className="carousel-card-content">
              <span className="carousel-card-category text-highlights">
                Frontend Clone
              </span>
              <h3 className="carousel-card-title text-highlights">
                Two Leaves
              </h3>
              <p className="carousel-card-desc">
                A pixel-perfect frontend clone of an organic tea and matcha
                e-commerce homepage, rebuilt from scratch.
              </p>
              <span className="carousel-card-link">
                <a
                  href="https://tea-levels-and-a-bud.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE ↗
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button
          className="carousel-btn"
          id="carouselPrev"
          aria-label="Previous"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>{" "}
        <button className="carousel-btn" id="carouselNext" aria-label="Next">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
}
