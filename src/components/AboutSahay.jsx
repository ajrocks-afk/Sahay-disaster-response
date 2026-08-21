import {
  TriangleAlert,
  Layers3,
  HeartHandshake,
  ArrowRight
} from "lucide-react";

function AboutSahay() {
  const cards = [
    {
      icon: <TriangleAlert size={22} />,
      label: "THE CHALLENGE",
      title: "Safety needs don't end with evacuation.",
      description:
        "During a disaster, people need more than a place to stay. Authorities must understand medical needs, sanitation, privacy, security and family status."
    },
    {
      icon: <Layers3 size={22} />,
      label: "THE GAP",
      title: "Critical information is often scattered.",
      description:
        "Citizens, shelters and response teams may operate across different channels, making it harder to build a clear real-time picture."
    },
    {
      icon: <HeartHandshake size={22} />,
      label: "THE SAHAY APPROACH",
      title: "One layer for better coordination.",
      description:
        "SAHAY brings emergency needs, shelter readiness and response information together while complementing existing systems."
    }
  ];

  const scrollToTop = () => {
    document.getElementById("how-it-works")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section
      className="about-sahay"
      id="about"
    >
      <div className="about-header">

        <span className="section-tag about-tag">
          WHY SAHAY EXISTS
        </span>

        <h2>
          A safe place is only the
          <span> beginning.</span>
        </h2>

        <p>
          Disaster response becomes more effective when people,
          shelters and authorised teams share the right information
          at the right time.
        </p>

      </div>


      <div className="about-grid">

        {cards.map((card, index) => (

          <article
            className="about-card"
            key={index}
          >

            <div className="about-card-number">
              0{index + 1}
            </div>

            <div className="about-icon">
              {card.icon}
            </div>

            <span className="about-label">
              {card.label}
            </span>

            <h3>{card.title}</h3>

            <p>{card.description}</p>

          </article>

        ))}

      </div>


      <div className="about-cta">

        <div>
          <span>THE GOAL</span>

          <h3>
            Better visibility. Faster coordination.
            Safer response.
          </h3>
        </div>

        <button onClick={scrollToTop}>
          See how SAHAY works
          <ArrowRight size={18} />
        </button>

      </div>

    </section>
  );
}

export default AboutSahay;