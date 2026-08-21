import {
  ShieldCheck,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Heart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <footer className="sahay-footer">

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <button
            className="footer-logo"
            onClick={() => navigate("/")}
          >
            <div className="footer-logo-symbol">
              <ShieldCheck size={22} />
            </div>

            <div>
              <div className="footer-brand-name">
                SAHAY
              </div>

              <div className="footer-brand-tagline">
                SAFE DISASTER RESPONSE
              </div>
            </div>
          </button>

          <p>
            A coordination layer for safer, more
            responsive and more inclusive disaster
            management.
          </p>

          <div className="footer-location">
            <MapPin size={15} />
            <span>Built for India</span>
          </div>

        </div>


        {/* PLATFORM */}

        <div className="footer-column">

          <h4>PLATFORM</h4>

          <button onClick={() => scrollToSection("how-it-works")}>
            How It Works
          </button>

          <button onClick={() => navigate("/shelters")}>
            Safe Shelters
          </button>

          <button onClick={() => navigate("/family")}>
            Family Status
          </button>

          <button onClick={() => navigate("/report")}>
            Report Incident
          </button>

        </div>


        {/* FOR RESPONSE TEAMS */}

        <div className="footer-column">

          <h4>FOR RESPONSE TEAMS</h4>

          <button onClick={() => navigate("/authority")}>
            Authority Access
          </button>

          <button onClick={() => scrollToSection("authorities")}>
            Response Network
          </button>

          <button onClick={() => navigate("/dashboard")}>
            Operations Dashboard
          </button>

        </div>


        {/* EMERGENCY */}

        <div className="footer-column footer-emergency">

          <h4>NEED HELP?</h4>

          <button
            className="footer-emergency-button"
            onClick={() => navigate("/emergency")}
          >
            Emergency Access
            <ArrowUpRight size={16} />
          </button>

          <div className="footer-contact">
            <Phone size={15} />
            <span>Emergency response support</span>
          </div>

          <div className="footer-contact">
            <Mail size={15} />
            <span>support@sahay.in</span>
          </div>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <span>
          © 2026 SAHAY. Built for safer communities.
        </span>

        <span className="footer-made">
          Designed with
          <Heart size={13} />
          for India
        </span>

      </div>

    </footer>
  );
}

export default Footer;