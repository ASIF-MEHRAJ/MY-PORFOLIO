export default function Preloader() {
  return (
    <div className="preloader" id="preloader">
      <div className="preloader-half preloader-half-top" />
      <div className="preloader-half preloader-half-bottom" />
      <div className="preloader-flash" />
      <div className="preloader-topbar">
        <div className="pl-topbar-item">
          <span className="pl-dot" />
          PORTFOLIO
        </div>
        <div className="pl-topbar-line">
          <span className="pl-topbar-tick" />
        </div>
        <div className="pl-topbar-item pl-topbar-item-right">
          CREATIVE DEVELOPER{" "}
          <button
            type="button"
            className="preloader-sound-toggle"
            id="preloaderSoundToggle"
            aria-label="Toggle boot sound"
            aria-pressed="true"
          >
            <span className="pl-sound-bars">
              <span className="pl-sound-bar" />{" "}
              <span className="pl-sound-bar" />{" "}
              <span className="pl-sound-bar" />
            </span>{" "}
            <span className="pl-sound-label">SOUND</span>
          </button>
        </div>
      </div>
      <div className="preloader-content">
        <div className="preloader-loading-tag">
          <span className="pl-dot" />
          LOADING EXPERIENCE
          <span className="pl-dot" />
        </div>
        <div className="preloader-frame">
          <span className="pl-corner pl-corner-tl" />{" "}
          <span className="pl-corner pl-corner-tr" />{" "}
          <span className="pl-corner pl-corner-bl" />{" "}
          <span className="pl-corner pl-corner-br" />{" "}
          <span className="pl-mark pl-mark-dot pl-mark-tl" />{" "}
          <span className="pl-mark pl-mark-square pl-mark-tr" />{" "}
          <span className="pl-mark pl-mark-dot pl-mark-bl" />{" "}
          <span className="pl-mark pl-mark-square pl-mark-br" />
          <div className="preloader-name">
            <div className="pl-line-mask">
              <span className="pl-line-inner pl-name-white">ASIF</span>
            </div>
            <div className="pl-line-mask">
              <span className="pl-line-inner pl-name-red">MEHRAJ</span>
            </div>
          </div>
          <div className="preloader-tagline">Frontend Developer</div>
        </div>
        <div className="preloader-status-row">
          BUILDING SOMETHING <em>EXTRAORDINARY</em>
        </div>
        <div className="preloader-progress-row">
          <div className="preloader-progress">
            <div
              className="preloader-progress-fill"
              id="preloaderProgressFill"
            />
          </div>
          <div className="preloader-counter">
            <span id="preloaderCounter">0</span>
            <span className="pl-percent-sign">%</span>
          </div>
        </div>
        <div className="preloader-status-sub" id="preloaderStatusSub">
          Initializing systems
        </div>
      </div>
      <div className="preloader-corner preloader-corner-bl">
        —&nbsp;EST. 2026
      </div>
      <div className="preloader-corner preloader-corner-br">
        PLEASE WAIT...&nbsp;—
      </div>
    </div>
  );
}
