import { ShieldCheck, Menu, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SahayLogo from "./SahayLogo";

function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const goHomeAndScroll = (id) => {
    if (window.location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);

      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  };

  return (
    <header className="navbar">

      <button
        className="nav-brand"
        onClick={() => navigate("/")}
        aria-label="Go to SAHAY home"
      >
        <SahayLogo className="nav-logo" />
      </button>

      <nav className="nav-links">

        <button
          onClick={() => goHomeAndScroll("how-it-works")}
        >
          How It Works
        </button>

        <button
          onClick={() => navigate("/shelters")}
        >
          Safe Shelters
        </button>

        <button
          onClick={() => navigate("/authority")}
        >
          For Authorities
        </button>

        <button
          onClick={() => goHomeAndScroll("about")}
        >
          About
        </button>

      </nav>


      <div className="nav-actions">

        <button
          className="nav-login"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>

        <button
          className="nav-emergency"
          onClick={() => navigate("/emergency")}
        >
          Emergency Access
          <ArrowUpRight size={16} />
        </button>

      </div>


      <button
        className="mobile-menu"
        onClick={() => alert("Mobile menu coming next!")}
        aria-label="Open navigation menu"
      >
        <Menu size={22} />
      </button>

    </header>
  );
}

export default Navbar;
