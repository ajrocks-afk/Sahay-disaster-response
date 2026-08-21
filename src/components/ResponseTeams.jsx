import {
  Building2,
  Siren,
  House,
  Landmark,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function ResponseTeams() {
  const navigate = useNavigate();

  const teams = [
    {
      icon: <Landmark size={26} />,
      title: "Authorities",
      description:
        "Monitor shelter readiness, incoming needs and emergency coordination from one operational view.",
      points: [
        "Live situation visibility",
        "Needs and incident tracking"
      ],
      type: "authority",
      route: "/authority"
    },

    {
      icon: <Siren size={26} />,
      title: "Response Teams",
      description:
        "Receive structured requests and coordinate the right support based on urgency and verified needs.",
      points: [
        "Prioritised response requests",
        "Clear operational updates"
      ],
      type: "response",
      route: "/dashboard"
    },

    {
      icon: <House size={26} />,
      title: "Shelter Managers",
      description:
        "Update capacity, facilities and operational readiness so authorities can make better decisions.",
      points: [
        "Live capacity updates",
        "Facility readiness tracking"
      ],
      type: "shelter",
      route: "/shelters"
    },

    {
      icon: <Building2 size={26} />,
      title: "Institutions",
      description:
        "Use SAHAY across campuses, hospitals, factories and large communities during emergencies.",
      points: [
        "Centralised safety coordination",
        "Scalable emergency workflows"
      ],
      type: "institution",
      route: "/authority"
    }
  ];

  return (
    <section
      className="response-teams"
      id="authorities"
    >

      <div className="response-teams-header">

        <div>
          <span className="section-tag response-tag">
            ONE COORDINATION LAYER
          </span>

          <h2>
            Built for the people
            <span> responding too.</span>
          </h2>
        </div>

        <p>
          SAHAY connects citizens, shelters and authorised response teams
          without replacing the systems already used by authorities.
        </p>

      </div>


      <div className="response-teams-grid">

        {teams.map((team, index) => (

          <button
            className={`response-team-card ${team.type}`}
            key={index}
            type="button"
            onClick={() => navigate(team.route)}
          >

            <div className="response-card-top">

              <div className="response-team-icon">
                {team.icon}
              </div>

              <ArrowUpRight
                size={20}
                className="response-arrow"
              />

            </div>


            <h3>
              {team.title}
            </h3>

            <p>
              {team.description}
            </p>


            <div className="response-points">

              {team.points.map((point, pointIndex) => (

                <div key={pointIndex}>
                  <CheckCircle2 size={15} />

                  <span>
                    {point}
                  </span>
                </div>

              ))}

            </div>

          </button>

        ))}

      </div>


      <div className="response-bottom">

        <div className="response-bottom-icon">
          <CheckCircle2 size={20} />
        </div>

        <div>

          <strong>
            Designed to work with existing emergency systems.
          </strong>

          <p>
            SAHAY acts as an additional coordination and visibility layer —
            not a replacement for government infrastructure.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ResponseTeams;