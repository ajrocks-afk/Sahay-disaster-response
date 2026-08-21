import {
  MapPin,
  ShieldCheck,
  HeartPulse,
  Bath,
  Users,
  ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function LiveShelters() {
  const navigate = useNavigate();

  const shelters = [
    {
      id: "community-relief-centre",
      name: "Community Relief Centre",
      location: "Verified Safe Zone",
      distance: "1.2 km away",
      capacity: "62%",
      status: "Highly Ready"
    },
    {
      id: "emergency-support-hub",
      name: "Emergency Support Hub",
      location: "Verified Safe Zone",
      distance: "2.4 km away",
      capacity: "48%",
      status: "Ready"
    },
    {
      id: "district-relief-shelter",
      name: "District Relief Shelter",
      location: "Verified Safe Zone",
      distance: "3.1 km away",
      capacity: "71%",
      status: "Available"
    }
  ];

  return (
    <section className="live-shelters">

      <div className="shelters-header">

        <div>
          <span className="section-tag shelter-tag">
            LIVE SHELTER NETWORK
          </span>

          <h2>
            Find safety that is
            <span> actually ready.</span>
          </h2>
        </div>

        <p>
          Verified shelters with live capacity, essential
          facilities and readiness information.
        </p>

      </div>

      <div className="shelters-grid">

        {shelters.map((shelter) => (

          <div
            className="shelter-card"
            key={shelter.id}
          >

            <div className="shelter-card-top">

              <div className="shelter-location-icon">
                <MapPin size={20} />
              </div>

              <span className="shelter-status">
                <span className="status-dot"></span>
                {shelter.status}
              </span>

            </div>

            <h3>
              {shelter.name}
            </h3>

            <div className="shelter-place">
              <MapPin size={13} />
              {shelter.location}
            </div>

            <div className="shelter-info">

              <div>
                <span>Distance</span>
                <strong>{shelter.distance}</strong>
              </div>

              <div>
                <span>Capacity</span>
                <strong>{shelter.capacity}</strong>
              </div>

            </div>

            <div className="facility-list">

              <div>
                <ShieldCheck size={15} />
                Verified
              </div>

              <div>
                <HeartPulse size={15} />
                Medical
              </div>

              <div>
                <Bath size={15} />
                Sanitation
              </div>

              <div>
                <Users size={15} />
                Privacy
              </div>

            </div>

            <button
              className="view-shelter"
              onClick={() =>
                navigate(`/shelters/${shelter.id}`)
              }
            >
              View Shelter
              <ArrowRight size={16} />
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default LiveShelters;