import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  UserRound,
  Phone,
  MapPin,
  UsersRound,
  HeartHandshake,
  ClipboardList,
  CheckCircle2,
  LockKeyhole,
  Building2
} from "lucide-react";

function SignIn() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    location: "",
    emergencyContact: "",
    assistance: ""
  });

  const [sahayId] = useState(
    `SAH-MH-26-${Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase()}`
  );

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.phone)) {
      alert("Please enter your name and mobile number.");
      return;
    }

    if (step === 2 && !formData.location) {
      alert("Please enter your current location.");
      return;
    }

    if (step === 3 && !formData.assistance) {
      alert("Please select your current support requirement.");
      return;
    }

    if (step === 3) {
      localStorage.setItem("sahayId", sahayId);
      localStorage.setItem("sahayName", formData.name);
    }

    setStep(step + 1);
  };

  return (
    <main className="signin-page">
      <div className="signin-container">

        <button
          className="page-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back to SAHAY
        </button>

        {/* HEADER */}

        <section className="signin-header">
          <div className="signin-shield">
            <ShieldCheck size={28} />
          </div>

          <span className="section-tag">
            SAHAY EMERGENCY SUPPORT
          </span>

          <h1>
            Get support.
            <span> Stay connected.</span>
          </h1>

          <p>
            Register with SAHAY to access emergency shelter,
            assistance, family coordination and safety support
            during a disaster.
          </p>
        </section>

        {/* SUCCESS SCREEN */}

        {step === 4 ? (
          <section className="registration-success">

            <div className="success-icon">
              <CheckCircle2 size={52} />
            </div>

            <span className="section-tag">
              REGISTRATION COMPLETE
            </span>

            <h2>
              You are now part of the
              <span> SAHAY response network.</span>
            </h2>

            <p>
              Your temporary emergency record has been created.
              Keep this ID available during shelter transfers,
              assistance requests and family reunification.
            </p>

            <div className="sahay-id-card">
              <div className="sahay-id-icon">
                <ClipboardList size={24} />
              </div>

              <div>
                <span>YOUR SAHAY EMERGENCY RECORD</span>
                <strong>{sahayId}</strong>
              </div>
            </div>

            <div className="registration-actions">

              <button
                className="signin-continue"
                onClick={() => navigate("/dashboard")}
              >
                Go to My Safety Dashboard
                <ArrowRight size={19} />
              </button>

              <button
                className="registered-button"
                onClick={() => navigate("/family")}
              >
                <UsersRound size={18} />
                Check Family Status
              </button>

            </div>

          </section>
        ) : (

          <section className="registration-card">

            {/* PROGRESS */}

            <div className="registration-progress">

              <div className={`progress-item ${step >= 1 ? "active" : ""}`}>
                <span>1</span>
                <small>Basic Info</small>
              </div>

              <div className="progress-line"></div>

              <div className={`progress-item ${step >= 2 ? "active" : ""}`}>
                <span>2</span>
                <small>Emergency</small>
              </div>

              <div className="progress-line"></div>

              <div className={`progress-item ${step >= 3 ? "active" : ""}`}>
                <span>3</span>
                <small>Support</small>
              </div>

            </div>

            {/* STEP 1 */}

            {step === 1 && (
              <div className="registration-step">

                <div className="registration-heading">
                  <span className="signin-step">01</span>

                  <div>
                    <h2>Tell us about yourself</h2>
                    <p>
                      Basic information helps authorised teams
                      identify and coordinate support for you.
                    </p>
                  </div>
                </div>

                <div className="registration-fields">

                  <label>
                    Full Name

                    <div className="input-wrapper">
                      <UserRound size={18} />

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          updateField("name", e.target.value)
                        }
                      />
                    </div>
                  </label>

                  <label>
                    Mobile Number

                    <div className="input-wrapper">
                      <Phone size={18} />

                      <input
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={formData.phone}
                        onChange={(e) =>
                          updateField("phone", e.target.value)
                        }
                      />
                    </div>
                  </label>

                  <label>
                    Age Range

                    <select
                      value={formData.age}
                      onChange={(e) =>
                        updateField("age", e.target.value)
                      }
                    >
                      <option value="">Select age range</option>
                      <option>Under 18</option>
                      <option>18 - 30</option>
                      <option>31 - 45</option>
                      <option>46 - 60</option>
                      <option>60+</option>
                    </select>
                  </label>

                  <label>
                    Gender

                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        updateField("gender", e.target.value)
                      }
                    >
                      <option value="">Select if you wish</option>
                      <option>Woman</option>
                      <option>Man</option>
                      <option>Non-binary</option>
                      <option>Prefer not to say</option>
                    </select>
                  </label>

                </div>

              </div>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <div className="registration-step">

                <div className="registration-heading">
                  <span className="signin-step">02</span>

                  <div>
                    <h2>Emergency information</h2>
                    <p>
                      This helps SAHAY coordinate your evacuation,
                      shelter and family connection.
                    </p>
                  </div>
                </div>

                <div className="registration-fields">

                  <label className="full-width">
                    Current Location

                    <div className="input-wrapper">
                      <MapPin size={18} />

                      <input
                        type="text"
                        placeholder="Area, village, shelter or locality"
                        value={formData.location}
                        onChange={(e) =>
                          updateField("location", e.target.value)
                        }
                      />
                    </div>
                  </label>

                  <label className="full-width">
                    Emergency Contact

                    <div className="input-wrapper">
                      <UsersRound size={18} />

                      <input
                        type="text"
                        placeholder="Name or mobile number of a trusted person"
                        value={formData.emergencyContact}
                        onChange={(e) =>
                          updateField(
                            "emergencyContact",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </label>

                </div>

              </div>
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <div className="registration-step">

                <div className="registration-heading">
                  <span className="signin-step">03</span>

                  <div>
                    <h2>Do you need any support?</h2>
                    <p>
                      You can share support needs so authorised
                      teams can prioritise the right assistance.
                    </p>
                  </div>
                </div>

                <div className="support-options">

                  {[
                    "Safe shelter",
                    "Medical support",
                    "Pregnancy-related assistance",
                    "Sanitary products",
                    "Family reunification",
                    "Safety or protection concern",
                    "No immediate assistance"
                  ].map((item) => (

                    <button
                      type="button"
                      key={item}
                      className={`support-option ${
                        formData.assistance === item
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        updateField("assistance", item)
                      }
                    >
                      <HeartHandshake size={18} />
                      {item}

                      {formData.assistance === item && (
                        <CheckCircle2 size={18} />
                      )}
                    </button>

                  ))}

                </div>

                <div className="privacy-registration-note">
                  <LockKeyhole size={18} />

                  <p>
                    Sensitive support information is intended to be
                    accessible only to authorised response personnel.
                  </p>
                </div>

              </div>
            )}

            {/* BUTTONS */}

            <div className="registration-navigation">

              {step > 1 && (
                <button
                  className="registration-back"
                  onClick={() => setStep(step - 1)}
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
              )}

              <button
                className="signin-continue registration-next"
                onClick={nextStep}
              >
                {step === 3
                  ? "Create SAHAY Emergency Record"
                  : "Continue"}

                <ArrowRight size={19} />
              </button>

            </div>

          </section>
        )}

        {/* ALREADY REGISTERED */}

        {step !== 4 && (
          <section className="already-registered">

            <div>
              <ShieldCheck size={21} />

              <div>
                <h3>Already registered with SAHAY?</h3>

                <p>
                  Access your existing emergency record and
                  verified safety information.
                </p>
              </div>
            </div>

            <button onClick={() => navigate("/dashboard")}>
              Access My Record
              <ArrowRight size={17} />
            </button>

          </section>
        )}

        {/* STAFF ACCESS */}

        {step !== 4 && (
          <div className="staff-access">

            <Building2 size={17} />

            <span>
              Authorised authority or response team?
            </span>

            <button onClick={() => navigate("/authority")}>
              Secure Staff Access
            </button>

          </div>
        )}

      </div>
    </main>
  );
}

export default SignIn;