import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Navigation,
  HeartPulse,
  House,
  LifeBuoy,
  Package,
  ShieldAlert,
  Minus,
  Plus,
  Send,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

function Emergency() {
  const navigate = useNavigate();

  const [selectedNeed, setSelectedNeed] = useState("");
  const [people, setPeople] = useState(1);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emergencyNeeds = [
    {
      id: "medical",
      title: "Medical Help",
      description: "Injury or urgent medical support",
      icon: <HeartPulse size={25} />
    },
    {
      id: "shelter",
      title: "Safe Shelter",
      description: "Need a safe place to stay",
      icon: <House size={25} />
    },
    {
      id: "rescue",
      title: "Rescue",
      description: "Immediate evacuation or rescue",
      icon: <LifeBuoy size={25} />
    },
    {
      id: "supplies",
      title: "Essential Supplies",
      description: "Food, water or basic supplies",
      icon: <Package size={25} />
    },
    {
      id: "security",
      title: "Safety & Security",
      description: "Immediate protection or security support",
      icon: <ShieldAlert size={25} />
    }
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectedNeed) {
      alert("Please select the type of assistance you need.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="emergency-page">
        <div className="emergency-success">

          <div className="success-icon">
            <CheckCircle2 size={48} />
          </div>

          <span className="section-tag emergency-tag">
            REQUEST RECEIVED
          </span>

          <h1>
            Help is being
            <span> coordinated.</span>
          </h1>

          <p>
            Your emergency request has been recorded and shared
            with the relevant response coordination team.
          </p>

          <div className="request-summary">
            <div>
              <span>Assistance needed</span>
              <strong>
                {emergencyNeeds.find(
                  (need) => need.id === selectedNeed
                )?.title}
              </strong>
            </div>

            <div>
              <span>People affected</span>
              <strong>{people}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="status-active">
                <span></span>
                Coordinating response
              </strong>
            </div>
          </div>

          <button
            className="back-home-button"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={18} />
            Back to SAHAY
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="emergency-page">

      <div className="emergency-container">

        <button
          className="page-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back to SAHAY
        </button>


        <div className="emergency-header">

          <span className="section-tag emergency-tag">
            <AlertTriangle size={14} />
            EMERGENCY ASSISTANCE
          </span>

          <h1>
            Help is closer when
            <span> we know what you need.</span>
          </h1>

          <p>
            Share your urgent requirement and SAHAY can help
            coordinate the appropriate response and support.
          </p>

        </div>


        <form
          className="emergency-form"
          onSubmit={handleSubmit}
        >

          {/* LOCATION */}

          <div className="emergency-location">

            <div className="location-icon">
              <MapPin size={22} />
            </div>

            <div>
              <span>Your current location</span>
              <strong>Mumbai, Maharashtra</strong>
            </div>

            <div className="location-status">
              <Navigation size={15} />
              Location detected
            </div>

          </div>


          {/* EMERGENCY TYPE */}

          <div className="form-section">

            <div className="form-section-heading">
              <span className="form-step">01</span>

              <div>
                <h2>What do you need?</h2>
                <p>Select the type of assistance required.</p>
              </div>
            </div>


            <div className="emergency-needs-grid">

              {emergencyNeeds.map((need) => (

                <button
                  type="button"
                  key={need.id}
                  className={`emergency-need-card ${
                    selectedNeed === need.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedNeed(need.id)}
                >

                  <div className="need-icon">
                    {need.icon}
                  </div>

                  <h3>{need.title}</h3>

                  <p>{need.description}</p>

                  {selectedNeed === need.id && (
                    <CheckCircle2
                      size={19}
                      className="selected-check"
                    />
                  )}

                </button>

              ))}

            </div>

          </div>


          {/* PEOPLE */}

          <div className="form-section people-section">

            <div className="form-section-heading">
              <span className="form-step">02</span>

              <div>
                <h2>How many people need help?</h2>
                <p>Include yourself and anyone currently with you.</p>
              </div>
            </div>


            <div className="people-counter">

              <button
                type="button"
                onClick={() =>
                  setPeople((current) =>
                    Math.max(1, current - 1)
                  )
                }
              >
                <Minus size={20} />
              </button>

              <strong>{people}</strong>

              <button
                type="button"
                onClick={() =>
                  setPeople((current) =>
                    Math.min(99, current + 1)
                  )
                }
              >
                <Plus size={20} />
              </button>

            </div>

          </div>


          {/* DETAILS */}

          <div className="form-section details-section">

            <div className="form-section-heading">
              <span className="form-step">03</span>

              <div>
                <h2>Anything else we should know?</h2>
                <p>Optional details that could help responders prepare.</p>
              </div>
            </div>

            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="For example: injury details, accessibility requirements, children or elderly persons present..."
              rows="5"
            />

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="emergency-submit"
          >
            <Send size={19} />
            Send Emergency Request
          </button>

          <p className="emergency-note">
            Your request will be directed to the appropriate
            response coordination channel.
          </p>

        </form>

      </div>

    </main>
  );
}

export default Emergency;