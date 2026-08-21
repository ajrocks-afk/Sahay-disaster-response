import {
  Siren,
  House,
  ShieldAlert,
  UsersRound,
  ArrowUpRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      icon: <Siren size={24} />,
      title: "Request Emergency Help",
      description:
        "Send your location and urgent needs to authorised response teams.",
      type: "emergency",
      path: "/emergency"
    },
    {
      icon: <House size={24} />,
      title: "Find a Safe Shelter",
      description:
        "Locate verified shelters with live capacity and facility information.",
      type: "shelter",
      path: "/shelters"
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "Private Assistance",
      description:
        "Request sensitive support or report an incident discreetly.",
      type: "private",
      path: "/report"
    },
    {
      icon: <UsersRound size={24} />,
      title: "Family Status",
      description:
        "Check the safety and evacuation status of registered family members.",
      type: "family",
      path: "/family"
    }
  ];

  return (
    <section className="quick-actions">

      <div className="section-heading">

        <span className="section-tag">
          QUICK RESPONSE
        </span>

        <h2>
          When every second matters,
          <span> know exactly what to do.</span>
        </h2>

        <p>
          SAHAY brings critical disaster-response services
          together in one simple, accessible platform.
        </p>

      </div>

      <div className="actions-grid">

        {actions.map((action, index) => (

          <button
            className={`action-card ${action.type}`}
            key={index}
            onClick={() => navigate(action.path)}
          >

            <div className="action-icon">
              {action.icon}
            </div>

            <div className="action-content">

              <h3>
                {action.title}
              </h3>

              <p>
                {action.description}
              </p>

            </div>

            <ArrowUpRight
              size={19}
              className="action-arrow"
            />

          </button>

        ))}

      </div>

    </section>
  );
}

export default QuickActions;