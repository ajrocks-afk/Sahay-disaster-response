import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Building2,
  Siren,
  Landmark,
  ArrowRight,
  LockKeyhole,
  Radio
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Citizen / Evacuee",
      description:
        "Access your safety information, shelters, family status and assistance services.",
      icon: Users,
      type: "citizen",
      action: () => navigate("/citizen")
    },
    {
      title: "Shelter Manager",
      description:
        "Update capacity, facilities and shelter readiness information.",
      icon: Building2,
      type: "shelter",
      action: () => navigate("/shelters")
    },
    {
      title: "Response Team",
      description:
        "View verified requests and coordinate emergency response actions.",
      icon: Siren,
      type: "response",
      action: () => navigate("/emergency")
    },
    {
      title: "Authority",
      description:
        "Access the command center, priority cases and shelter safety data.",
      icon: Landmark,
      type: "authority",
      action: () => navigate("/authority")
    }
  ];

  return (
    <main className="signin-page">

      <section className="signin-hero">

        <div className="signin-glow glow-one"></div>
        <div className="signin-glow glow-two"></div>

        <div className="signin-content">

          <div className="signin-badge">
            <Radio size={15} />
            SECURE EMERGENCY ACCESS
          </div>

          <h1>
            Access the right tools
            <span> when every second matters.</span>
          </h1>

          <p>
            Select your role to access the appropriate SAHAY
            workspace. Information and actions are organised
            according to your responsibilities during an emergency.
          </p>

          <div className="signin-security">

            <div>
              <LockKeyhole size={18} />
              <span>Role-based access</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Privacy-aware records</span>
            </div>

          </div>

        </div>

        <div className="signin-status-card">

          <div className="signin-status-top">

            <div className="status-icon">
              <ShieldCheck size={24} />
            </div>

            <div>
              <span>SAHAY NETWORK</span>
              <strong>Operational</strong>
            </div>

            <div className="status-live">
              LIVE
            </div>

          </div>

          <div className="status-line"></div>

          <div className="signin-status-row">
            <span>Emergency services</span>
            <strong>Connected</strong>
          </div>

          <div className="signin-status-row">
            <span>Shelter network</span>
            <strong>34 Active</strong>
          </div>

          <div className="signin-status-row">
            <span>Coordination layer</span>
            <strong>Online</strong>
          </div>

        </div>

      </section>

      <section className="role-access-section">

        <div className="role-access-header">

          <div>

            <span className="section-tag">
              CHOOSE YOUR ACCESS
            </span>

            <h2>
              One platform.
              <span> Different responsibilities.</span>
            </h2>

          </div>

          <p>
            SAHAY provides different operational views while keeping
            emergency coordination connected.
          </p>

        </div>

        <div className="role-grid">

          {roles.map((role, index) => {

            const Icon = role.icon;

            return (
              <button
                className={`role-card ${role.type}`}
                key={index}
                onClick={role.action}
              >

                <div className="role-card-top">

                  <div className="role-icon">
                    <Icon size={25} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="role-arrow"
                  />

                </div>

                <h3>{role.title}</h3>

                <p>{role.description}</p>

                <div className="role-access">

                  Continue

                  <ArrowRight size={16} />

                </div>

              </button>
            );

          })}

        </div>

      </section>

      <section className="signin-footer-note">

        <ShieldCheck size={18} />

        <p>
          SAHAY is a coordination and safety layer designed to work
          alongside existing emergency and government infrastructure.
        </p>

      </section>

    </main>
  );
}

export default Dashboard;