import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MapPin,
  HeartPulse,
  UsersRound,
  Siren,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  Navigation,
  PhoneCall,
  LockKeyhole
} from "lucide-react";

function Citizen() {
  const navigate = useNavigate();

  const sahayId =
    localStorage.getItem("sahayId") || "SAH-MH-26-DEMO01";

  const name =
    localStorage.getItem("sahayName") || "Citizen";

  return (
    <main className="citizen-page">
      <div className="citizen-container">

        {/* HEADER */}

        <section className="citizen-header">

          <div className="citizen-welcome">

            <div className="citizen-tag">
              <ShieldCheck size={15} />
              SAHAY CITIZEN SAFETY
            </div>

            <h1>
              Stay safe,
              <span> {name}.</span>
            </h1>

            <p>
              Your emergency information, nearby shelters and
              assistance options are connected in one place.
            </p>

          </div>

          <div className="citizen-id-card">

            <div className="citizen-id-icon">
              <ClipboardList size={21} />
            </div>

            <div>
              <span>SAHAY EMERGENCY ID</span>
              <strong>{sahayId}</strong>
            </div>

          </div>

        </section>


        {/* EMERGENCY BANNER */}

        <section className="citizen-emergency">

          <div className="citizen-emergency-info">

            <div className="citizen-emergency-icon">
              <Siren size={21} />
            </div>

            <div>
              <h3>Need immediate help?</h3>
              <p>
                Contact emergency response services or request
                assistance through SAHAY.
              </p>
            </div>

          </div>

          <button onClick={() => navigate("/emergency")}>
            Emergency Access
          </button>

        </section>


        {/* QUICK ACTIONS */}

        <div className="citizen-section-title">

          <span>QUICK ACCESS</span>

          <h2>What do you need?</h2>

        </div>

        <section className="citizen-actions">

          <button
            className="citizen-action"
            onClick={() => navigate("/shelters")}
          >

            <div className="citizen-action-icon">
              <MapPin size={21} />
            </div>

            <div>
              <h3>Find Safe Shelter</h3>
              <p>
                Find nearby shelters and check their readiness.
              </p>
            </div>

          </button>


          <button
            className="citizen-action"
            onClick={() => navigate("/report")}
          >

            <div className="citizen-action-icon">
              <HeartPulse size={21} />
            </div>

            <div>
              <h3>Request Assistance</h3>
              <p>
                Tell response teams what support you need.
              </p>
            </div>

          </button>


          <button
            className="citizen-action"
            onClick={() => navigate("/family")}
          >

            <div className="citizen-action-icon">
              <UsersRound size={21} />
            </div>

            <div>
              <h3>Family Status</h3>
              <p>
                Check reunification and family coordination.
              </p>
            </div>

          </button>


          <button
            className="citizen-action"
            onClick={() => navigate("/report")}
          >

            <div className="citizen-action-icon">
              <Siren size={21} />
            </div>

            <div>
              <h3>Report a Concern</h3>
              <p>
                Privately report a safety or shelter concern.
              </p>
            </div>

          </button>

        </section>


        {/* MAIN GRID */}

        <section className="citizen-grid">


          {/* NEARBY SHELTER */}

          <div className="citizen-panel">

            <div className="citizen-panel-header">

              <div>
                <span>NEARBY SUPPORT</span>
                <h2>Recommended Safe Shelter</h2>
              </div>

              <button
                className="citizen-panel-link"
                onClick={() => navigate("/shelters")}
              >
                View all
                <ArrowRight size={15} />
              </button>

            </div>


            <div className="citizen-shelter-card">

              <div className="citizen-shelter-top">

                <div className="citizen-shelter-name">

                  <div className="citizen-shelter-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3>Panvel Relief Centre</h3>

                    <p>
                      Panvel • Maharashtra
                    </p>
                  </div>

                </div>

                <span className="shelter-ready">
                  READY
                </span>

              </div>


              <div className="citizen-shelter-meta">

                <div>
                  <CheckCircle2 size={14} />
                  Essential facilities
                </div>

                <div>
                  <UsersRound size={14} />
                  Capacity available
                </div>

                <div>
                  <Navigation size={14} />
                  Nearby
                </div>

              </div>


              <button
                className="citizen-shelter-button"
                onClick={() => navigate("/shelters")}
              >
                View Shelter Details
                <ArrowRight size={16} />
              </button>

            </div>

          </div>


          {/* SAFETY STATUS */}

          <div className="citizen-panel">

            <div className="citizen-panel-header">

              <div>
                <span>YOUR STATUS</span>
                <h2>Safety Overview</h2>
              </div>

            </div>


            <div className="citizen-status-card">

              <div className="citizen-status-top">

                <div className="citizen-status-icon">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <span>CURRENT STATUS</span>
                  <strong>Record Active</strong>
                </div>

              </div>

              <p className="citizen-status-message">
                Your temporary SAHAY emergency record is active.
                Authorised teams can use your record for
                assistance and coordination.
              </p>

            </div>


            <div className="citizen-record-list">

              <div className="citizen-record">

                <div>
                  <LockKeyhole size={17} />
                  <span>Privacy status</span>
                </div>

                <strong>Protected</strong>

              </div>


              <div className="citizen-record">

                <div>
                  <PhoneCall size={17} />
                  <span>Emergency contact</span>
                </div>

                <strong>Added</strong>

              </div>


              <div className="citizen-record">

                <div>
                  <UsersRound size={17} />
                  <span>Family coordination</span>
                </div>

                <strong>Available</strong>

              </div>

            </div>

          </div>

        </section>


        {/* LOWER ACTIONS */}

        <section className="citizen-lower-actions">

          <button
            className="citizen-lower-card"
            onClick={() => navigate("/family")}
          >

            <UsersRound size={23} />

            <h3>Family Coordination</h3>

            <p>
              Track family members, reunification requests
              and transfer updates.
            </p>

          </button>


          <button
            className="citizen-lower-card"
            onClick={() => navigate("/dashboard")}
          >

            <ShieldCheck size={23} />

            <h3>Manage My Record</h3>

            <p>
              Access your SAHAY emergency information
              and connected safety services.
            </p>

          </button>

        </section>

      </div>
    </main>
  );
}

export default Citizen;