import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShieldAlert,
  MessageSquareWarning,
  HeartHandshake,
  LockKeyhole,
  ShieldCheck,
  CheckCircle2,
  Send,
  EyeOff,
  HeartPulse,
  Package,
  Users,
  Baby,
  AlertTriangle
} from "lucide-react";

function Report() {
  const navigate = useNavigate();

  const [requestType, setRequestType] = useState("");
  const [concern, setConcern] = useState("");
  const [details, setDetails] = useState("");
  const [privateMode, setPrivateMode] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const requestReference = `SAH-REQ-26-${Math.floor(
    10000 + Math.random() * 90000
  )}`;
  
  const requestOptions = [
    {
      id: "medical",
      icon: <HeartPulse size={26} />,
      title: "Medical Assistance",
      description:
        "Request medical, pregnancy-related or other urgent health support."
    },
    {
      id: "supplies",
      icon: <Package size={26} />,
      title: "Essential Supplies",
      description:
        "Request sanitary products, food, water or other essential supplies."
    },
    {
      id: "safety",
      icon: <ShieldAlert size={26} />,
      title: "Safety Concern",
      description:
        "Privately report a safety, protection, privacy or harassment concern."
    },
    {
      id: "family",
      icon: <Users size={26} />,
      title: "Family Separation",
      description:
        "Request help locating or reconnecting with a separated family member."
    },
    {
      id: "child",
      icon: <Baby size={26} />,
      title: "Child Assistance",
      description:
        "Request support for a child who is separated, vulnerable or needs assistance."
    },
    {
      id: "urgent",
      icon: <AlertTriangle size={26} />,
      title: "Other Urgent Need",
      description:
        "Request immediate support for an emergency not covered above."
    }
  ];

  const concerns = [
    "Urgent medical assistance",
    "Pregnancy-related assistance",
    "Sanitary or hygiene products",
    "Food or drinking water",
    "Safety or protection concern",
    "Privacy concern",
    "Separated family member",
    "Child assistance",
    "Harassment or abuse",
    "Other urgent need"
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!requestType || !concern) {
      alert("Please select the type of request and concern.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="report-page">
        <div className="report-success">

          <div className="report-success-icon">
            <ShieldCheck size={48} />
          </div>

          <span className="section-tag report-tag">
            SECURE REQUEST RECEIVED
          </span>

          <h1>
            Your request has been
            <span> shared securely.</span>
          </h1>

          <p>
              The information has been recorded and directed to the
              appropriate authorised response channel.
          </p>
          <div className="request-reference">
            <span>SAHAY REQUEST REFERENCE</span>
            <strong>{requestReference}</strong>
          </div>

          <div className="report-summary">

            <div>
              <span>Request type</span>
              <strong>
                {
                  requestOptions.find(
                    (option) => option.id === requestType
                  )?.title
                }
              </strong>
            </div>

            <div>
              <span>Concern</span>
              <strong>{concern}</strong>
            </div>

            <div>
              <span>Privacy</span>
              <strong className="private-status">
                <EyeOff size={15} />
                {privateMode ? "Private" : "Standard"}
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
    <main className="report-page">

      <div className="report-container">

        <button
          className="page-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back to SAHAY
        </button>


        <div className="report-header">

          <span className="section-tag report-tag">
            <LockKeyhole size={14} />
            PRIVATE ASSISTANCE
          </span>

          <h1>
            Ask for help.
            <span> Stay in control.</span>
          </h1>

          <p>
            SAHAY provides a discreet way to request sensitive support
            or report concerns during an emergency situation.
          </p>

        </div>


        <form
          className="report-form"
          onSubmit={handleSubmit}
        >

          {/* REQUEST TYPE */}

          <div className="report-form-section">

            <div className="report-section-heading">

              <span className="form-step">01</span>

              <div>
                <h2>How can we help?</h2>
                <p>Select the type of support you need.</p>
              </div>

            </div>


            <div className="request-options">

              {requestOptions.map((option) => (

                <button
                  type="button"
                  key={option.id}
                  className={`request-option ${
                    requestType === option.id ? "selected" : ""
                  }`}
                  onClick={() => setRequestType(option.id)}
                >

                  <div className="request-option-icon">
                    {option.icon}
                  </div>

                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.description}</p>
                  </div>

                  {requestType === option.id && (
                    <CheckCircle2
                      size={20}
                      className="report-selected-check"
                    />
                  )}

                </button>

              ))}

            </div>

          </div>


          {/* CONCERN */}

          <div className="report-form-section">

            <div className="report-section-heading">

              <span className="form-step">02</span>

              <div>
                <h2>What is the concern?</h2>
                <p>Select the option that best describes the situation.</p>
              </div>

            </div>


            <div className="concern-options">

              {concerns.map((item) => (

                <button
                  type="button"
                  key={item}
                  className={`concern-option ${
                    concern === item ? "selected" : ""
                  }`}
                  onClick={() => setConcern(item)}
                >
                  {concern === item && (
                    <CheckCircle2 size={16} />
                  )}

                  {item}

                </button>

              ))}

            </div>

          </div>


          {/* PRIVACY MODE */}

          <div className="privacy-card">

            <div className="privacy-icon">
              <EyeOff size={22} />
            </div>

            <div className="privacy-content">

              <h3>Keep my identity private</h3>

              <p>
                Limit identity visibility to only authorised personnel
                handling this request.
              </p>

            </div>

            <button
              type="button"
              className={`privacy-toggle ${
                privateMode ? "active" : ""
              }`}
              onClick={() => setPrivateMode(!privateMode)}
              aria-label="Toggle private mode"
            >
              <span></span>
            </button>

          </div>


          {/* DETAILS */}

          <div className="report-form-section">

            <div className="report-section-heading">

              <span className="form-step">03</span>

              <div>
                <h2>Tell us anything else</h2>
                <p>Optional details that could help the response team.</p>
              </div>

            </div>

            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe the situation only if you feel safe and comfortable doing so..."
              rows="5"
            />

          </div>


          <button
            type="submit"
            className="report-submit"
          >
            <Send size={19} />
            Submit Secure Request
          </button>

          <p className="report-note">
            Your request is intended to be visible only to authorised
            personnel involved in coordinating support.
          </p>

        </form>

      </div>

    </main>
  );
}

export default Report;