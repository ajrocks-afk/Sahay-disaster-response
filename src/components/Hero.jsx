import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Activity
} from "lucide-react";

function Hero() {
  const navigate = useNavigate();
  
  return (
    <section className="hero">

      {/* Background glow */}

      <div className="hero-glow hero-glow-orange"></div>
      <div className="hero-glow hero-glow-green"></div>


      {/* LEFT SIDE */}

      <div className="hero-content">

        <div className="live-badge">

          <span className="live-dot"></span>

          <span>
            EMERGENCY RESPONSE NETWORK
          </span>

          <span className="live-status">
            LIVE
          </span>

        </div>


        <h1>

          When disaster strikes,

          <span>
            safety needs more than rescue.
          </span>

        </h1>


        <p className="hero-description">

          SAHAY connects people, shelters and authorities
          to make evacuation, emergency accommodation and
          response safer for women and vulnerable citizens.

        </p>


        <div className="hero-actions">

          <button
            className="hero-primary"
            onClick={() => navigate("/shelters")}
          >
            Find a Safe Shelter
            <ArrowRight size={18} />
          </button>

          <button
            className="hero-secondary"
            onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
             Explore SAHAY
          </button>

        </div>


        <div className="hero-trust">

          <ShieldCheck size={17} />

          <span>
            Designed with privacy, accessibility and
            low-connectivity conditions in mind.
          </span>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="hero-visual">

        <div className="map-glow"></div>


        <div className="map-card">

          <div className="map-top">

            <div>

              <span>
                ACTIVE RESPONSE
              </span>

              <h3>
                Active Disaster Response
              </h3>

            </div>


            <div className="response-status">

              <Activity size={14} />

              LIVE

            </div>

          </div>


          <div className="map-area">

            <div className="map-grid"></div>

            {/* Route */}
            <div className="route-line"></div>

            {/* Your Location */}
            <div className="map-location user-location">
              <div className="location-pulse"></div>
                <MapPin size={19} />
            </div>

            <div className="map-label user-label">
              YOU
            </div>



            {/* Shelter 1 */}

            <div className="map-location shelter-one">

              <div className="shelter-marker">
                <ShieldCheck size={10} />
              </div>

              <div className="shelter-label">
                SAFE SHELTER
              </div>

            </div>


            {/* Shelter 2 */}

            <div className="map-location shelter-two">

              <div className="shelter-marker">
                <ShieldCheck size={10} />
              </div>

              <div className="shelter-label-two">
                87% READY
              </div>

            </div>

          </div>
          {/* Bottom information */}

          <div className="map-footer">

            <div>

              <span>
                Nearest safe shelter
              </span>

              <strong>
                1.2 km away
              </strong>

            </div>


            <div>

              <span>
                Capacity
              </span>

              <strong>
                88%
              </strong>

            </div>


            <div>

              <span>
                Readiness
              </span>

              <strong className="safe-text">
                87%
              </strong>

            </div>

          </div>

        </div>


        {/* Floating assistance card */}

        <div className="floating-assistance">

          <div className="assistance-icon">
            🆘
          </div>

          <div>

            <strong>
              Discreet Assistance
            </strong>

            <span>
              Request help privately
            </span>

          </div>

          <div className="notification-dot"></div>

        </div>


        {/* Floating shelter card */}

        <div className="floating-shelter">

          <div className="mini-shelter-icon">
            ✓
          </div>

          <div>

            <strong>
              Shelter Verified
            </strong>

            <span>
              Facilities operational
            </span>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;
