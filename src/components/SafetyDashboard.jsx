import {
  ShieldCheck,
  HeartPulse,
  Bath,
  LockKeyhole,
  CheckCircle2
} from "lucide-react";

function SafetyDashboard() {
  const metrics = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Shelter Safety",
      value: "92%",
      description: "Verified safety readiness"
    },
    {
      icon: <HeartPulse size={22} />,
      title: "Medical Support",
      value: "84%",
      description: "Medical facilities available"
    },
    {
      icon: <Bath size={22} />,
      title: "Sanitation",
      value: "89%",
      description: "Essential facilities operational"
    },
    {
      icon: <LockKeyhole size={22} />,
      title: "Privacy & Security",
      value: "96%",
      description: "Protected spaces and reporting"
    }
  ];

  return (
    <section className="safety-dashboard">

      <div className="dashboard-content">

        <span className="section-tag dashboard-tag">
          LIVE READINESS
        </span>

        <h2>
          Safety is more than
          <span> just a roof.</span>
        </h2>

        <p>
          SAHAY helps authorities understand whether a shelter
          is actually prepared for the people arriving there —
          from sanitation and medical support to privacy and security.
        </p>

        <div className="dashboard-points">

          <div>
            <CheckCircle2 size={18} />
            Real-time facility readiness
          </div>

          <div>
            <CheckCircle2 size={18} />
            Vulnerable citizen needs tracking
          </div>

          <div>
            <CheckCircle2 size={18} />
            Verified operational information
          </div>

        </div>

      </div>


      <div className="metrics-grid">

        {metrics.map((metric, index) => (

          <div
            className="metric-card"
            key={index}
          >

            <div className="metric-icon">
              {metric.icon}
            </div>

            <div className="metric-value">
              {metric.value}
            </div>

            <h3>
              {metric.title}
            </h3>

            <p>
              {metric.description}
            </p>

            <div className="metric-bar">
              <div
                className={`metric-progress progress-${index}`}
              ></div>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default SafetyDashboard;