import {
  ShieldAlert,
  Building2,
  Users,
  Siren,
  AlertTriangle,
  HeartPulse,
  UserRoundSearch,
  ArrowUpRight,
  CheckCircle2,
  Radio,
  Wifi,
  MapPin,
  ClipboardList,
  ShieldCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Authority() {
  const navigate = useNavigate();
  const priorityCases = [
    {
      type: "URGENT",
      title: "Child assistance requested",
      location: "Panvel Relief Shelter",
      description:
        "A vulnerable child requires immediate support and verification.",
      icon: Users,
      level: "urgent",
      category: "Child Assistance"
    },
    {
      type: "URGENT",
      title: "Safety concern reported",
      location: "Panvel Relief Shelter",
      description:
        "Private protection request requires immediate authorised review.",
      icon: ShieldAlert,
      level: "urgent",
      category: "Safety Concern"
    },
    {
      type: "HIGH PRIORITY",
      title: "Pregnancy assistance required",
      location: "Sector 5 Emergency Shelter",
      description:
        "Medical support team has not yet been assigned to this request.",
      icon: HeartPulse,
      level: "high",
      category: "Medical Assistance"
    },
    {
      type: "HIGH PRIORITY",
      title: "Essential supplies requested",
      location: "Kalamboli Community Centre",
      description:
        "Sanitary and hygiene supplies have been requested privately.",
      icon: ClipboardList,
      level: "high",
      category: "Essential Supplies"
    },
    {
      type: "ATTENTION",
      title: "Family separation case",
      location: "Kalamboli Community Centre",
      description:
        "Evacuee record requires family reunification support.",
      icon: UserRoundSearch,
      level: "medium",
      category: "Family Separation"
    },
    {
      type: "ATTENTION",
      title: "Urgent assistance request",
      location: "Sector 5 Emergency Shelter",
      description:
        "An additional urgent need has been submitted for authorised review.",
      icon: AlertTriangle,
      level: "medium",
      category: "Other Urgent Need"
    }
  ];

  const shelters = [
    {
      name: "Panvel Relief Centre",
      score: 87,
      status: "Ready",
      issue: "All critical facilities operational"
    },
    {
      name: "Kalamboli Community Hall",
      score: 62,
      status: "Needs Attention",
      issue: "Privacy area requires improvement"
    },
    {
      name: "Sector 5 Emergency Shelter",
      score: 48,
      status: "Action Required",
      issue: "Women's sanitation facility unavailable"
    }
  ];

  const evacuees = [
    {
      id: "SAH-MH-26-8F42X",
      status: "Family reunification pending",
      location: "Panvel Relief Centre"
    },
    {
      id: "SAH-MH-26-3K91P",
      status: "Medical support completed",
      location: "Sector 5 Emergency Shelter"
    },
    {
      id: "SAH-MH-26-7M24Q",
      status: "Transfer verification pending",
      location: "Kalamboli Community Hall"
    }
  ];

  return (
    <main className="authority-page">

      {/* TOP BAR */}
      <section className="authority-hero">
        <div>
          <div className="authority-live">
            <Radio size={15} />
            LIVE INCIDENT MONITORING
          </div>

          <h1>
            Disaster Response
            <span> Command Center.</span>
          </h1>

          <p>
            Monitor shelters, vulnerable populations and urgent assistance
            requests from one coordinated operational view.
          </p>
        </div>

        <div className="authority-network">
          <Wifi size={18} />
          <div>
            <span>NETWORK STATUS</span>
            <strong>Systems Connected</strong>
          </div>
          <div className="network-dot"></div>
        </div>
      </section>

      {/* STATS */}
      <section className="authority-stats">

        <div className="authority-stat urgent-stat">
          <div className="stat-icon">
            <Siren size={22} />
          </div>
          <div>
            <span>URGENT CASES</span>
            <strong>12</strong>
            <small>4 require immediate action</small>
          </div>
        </div>

        <div className="authority-stat">
          <div className="stat-icon">
            <Building2 size={22} />
          </div>
          <div>
            <span>ACTIVE SHELTERS</span>
            <strong>34</strong>
            <small>6 need attention</small>
          </div>
        </div>

        <div className="authority-stat">
          <div className="stat-icon">
            <Users size={22} />
          </div>
          <div>
            <span>EVACUEES TRACKED</span>
            <strong>1,248</strong>
            <small>36 transferred today</small>
          </div>
        </div>

        <div className="authority-stat">
          <div className="stat-icon">
            <ShieldCheck size={22} />
          </div>
          <div>
            <span>FAMILY REUNITED</span>
            <strong>86</strong>
            <small>18 reunifications today</small>
          </div>
        </div>

      </section>

      {/* MAIN GRID */}
      <section className="authority-grid">

        {/* PRIORITY ACTIONS */}
        <div className="authority-panel priority-panel">

          <div className="panel-header">
            <div>
              <span className="panel-label">REQUIRES ATTENTION</span>
              <h2>Priority Actions</h2>
            </div>

            <button 
              className="panel-link"
              onClick={() => navigate("/authority/records")}
            >
              Manage records
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="priority-list">
            {priorityCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className={`priority-card ${item.level}`}
                  key={index}
                >
                  <div className="priority-icon">
                    <Icon size={20} />
                  </div>

                  <div className="priority-content">
                    <div className="priority-meta">
                      <span className="priority-level">
                        {item.type}
                      </span>

                      <span className="priority-category">
                        {item.category}
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>
                      <MapPin size={14} />
                      {item.location}
                    </p>

                    <small>{item.description}</small>
                  </div>

                  <button className="action-arrow">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* SHELTER SAFETY */}
        <div className="authority-panel shelter-panel">

          <div className="panel-header">
            <div>
              <span className="panel-label">
                LIVE READINESS MONITORING
              </span>
              <h2>Shelter Safety Score</h2>
            </div>

            <div className="score-badge">
              Dynamic
            </div>
          </div>

          <div className="shelter-score-list">
            {shelters.map((shelter, index) => (
              <div className="shelter-score-card" key={index}>

                <div className="shelter-score-top">
                  <div>
                    <h3>{shelter.name}</h3>
                    <span>{shelter.status}</span>
                  </div>

                  <strong>{shelter.score}%</strong>
                </div>

                <div className="score-track">
                  <div
                    className="score-progress"
                    style={{ width: `${shelter.score}%` }}
                  ></div>
                </div>

                <p>
                  <AlertTriangle size={14} />
                  {shelter.issue}
                </p>

              </div>
            ))}
          </div>
        </div>

      </section>

      {/* EVACUEE TRACKING */}
      <section className="authority-panel evacuee-panel">

        <div className="panel-header">
          <div>
            <span className="panel-label">
              CONTINUITY & ACCOUNTABILITY
            </span>
            <h2>Evacuee Tracking</h2>
          </div>

          <button className="panel-link">
            Manage records
            <ArrowUpRight size={16} />
          </button>
        </div>

        <p className="evacuee-intro">
          Temporary SAHAY records help authorised teams maintain continuity
          from rescue and shelter assignment through verified transfer and
          family reunification.
        </p>

        <div className="evacuee-list">
          {evacuees.map((person, index) => (
            <div className="evacuee-card" key={index}>

              <div className="evacuee-id-icon">
                <ClipboardList size={20} />
              </div>

              <div>
                <span>SAHAY TEMPORARY RECORD</span>
                <h3>{person.id}</h3>
              </div>

              <div className="evacuee-status">
                <CheckCircle2 size={18} />
                <span>{person.status}</span>
              </div>

              <div className="evacuee-location">
                <MapPin size={16} />
                {person.location}
              </div>

              <button>
                <ArrowUpRight size={18} />
              </button>

            </div>
          ))}
        </div>

      </section>

      {/* INTEGRATION LAYER */}
      <section className="integration-section">

        <div className="integration-copy">
          <span className="panel-label">
            BUILT TO WORK WITH EXISTING INFRASTRUCTURE
          </span>

          <h2>
            SAHAY doesn't replace
            <span> government systems.</span>
          </h2>

          <p>
            Existing emergency and disaster-management platforms continue
            performing their specialised functions. SAHAY adds a coordination,
            vulnerability and shelter-safety layer on top.
          </p>
        </div>

        <div className="integration-flow">

          <div className="integration-system">
            Emergency Systems
          </div>

          <ArrowUpRight size={20} />

          <div className="sahay-layer">
            <ShieldCheck size={24} />
            <strong>SAHAY</strong>
            <span>Coordination Layer</span>
          </div>

          <ArrowUpRight size={20} />

          <div className="integration-system">
            Response Teams
          </div>

        </div>

      </section>

    </main>
  );
}

export default Authority;