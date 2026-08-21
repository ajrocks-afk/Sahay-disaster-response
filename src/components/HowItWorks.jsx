import {
  Radio,
  Network,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Radio size={24} />,
      title: "Detect",
      description:
        "SAHAY brings together live shelter conditions, citizen needs and emergency information into one operational view."
    },
    {
      number: "02",
      icon: <Network size={24} />,
      title: "Coordinate",
      description:
        "Authorities, shelter managers, medical teams and response personnel stay connected through a shared coordination layer."
    },
    {
      number: "03",
      icon: <ShieldCheck size={24} />,
      title: "Protect",
      description:
        "SAHAY helps ensure that evacuation and shelter operations consider safety, privacy, sanitation and vulnerable citizens."
    }
  ];

  return (
    <section 
      className="how-it-works"
      id="how-it-works"
    >

      <div className="how-header">

        <span className="section-tag how-tag">
          HOW SAHAY WORKS
        </span>

        <h2>
          From emergency
          <span> to coordinated action.</span>
        </h2>

        <p>
          SAHAY connects the information that matters with the people
          responsible for acting on it — helping emergency response become
          safer, faster and more coordinated.
        </p>

      </div>


      <div className="steps-container">

        {steps.map((step, index) => (

          <div className="step-wrapper" key={step.number}>

            <div className="step-card">

              <div className="step-top">

                <span className="step-number">
                  {step.number}
                </span>

                <div className="step-icon">
                  {step.icon}
                </div>

              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>


            {index < steps.length - 1 && (
              <div className="step-arrow">
                <ArrowRight size={20} />
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;