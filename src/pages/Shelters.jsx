import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Search,
  ShieldCheck,
  HeartPulse,
  Bath,
  Users,
  ArrowRight,
  CheckCircle2,
  Navigation,
  Phone,
  Clock
} from "lucide-react";

const shelters = [
  {
    id: "community-relief-centre",
    name: "Community Relief Centre",
    area: "Verified Safe Zone",
    distance: "1.2 km away",
    capacity: "62%",
    available: 152,
    total: 400,
    status: "Highly Ready",
    readiness: 94,
    medical: true,
    sanitation: true,
    privacy: true,
    description:
      "A verified community shelter with medical support, sanitation facilities and dedicated protected spaces."
  },
  {
    id: "emergency-support-hub",
    name: "Emergency Support Hub",
    area: "Verified Safe Zone",
    distance: "2.4 km away",
    capacity: "48%",
    available: 208,
    total: 400,
    status: "Ready",
    readiness: 86,
    medical: true,
    sanitation: true,
    privacy: true,
    description:
      "An emergency support centre prepared for temporary accommodation and coordinated disaster assistance."
  },
  {
    id: "district-relief-shelter",
    name: "District Relief Shelter",
    area: "Verified Safe Zone",
    distance: "3.1 km away",
    capacity: "71%",
    available: 87,
    total: 300,
    status: "Available",
    readiness: 78,
    medical: true,
    sanitation: true,
    privacy: false,
    description:
      "A district-level relief shelter providing essential accommodation and emergency support services."
  }
];

function Shelters() {
  const navigate = useNavigate();
  const { shelterId } = useParams();

  const [search, setSearch] = useState("");

  const filteredShelters = shelters.filter((shelter) =>
    shelter.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedShelter = shelters.find(
    (shelter) => shelter.id === shelterId
  );

  /* =====================================
     INDIVIDUAL SHELTER DETAILS
     ===================================== */

  if (selectedShelter) {
    return (
      <main className="shelters-page">

        <div className="shelters-container">

          <button
            className="page-back-button"
            onClick={() => navigate("/shelters")}
          >
            <ArrowLeft size={18} />
            Back to shelters
          </button>

          <section className="shelter-detail">

            <div className="shelter-detail-header">

              <div>
                <span className="section-tag shelter-page-tag">
                  <ShieldCheck size={14} />
                  VERIFIED SHELTER
                </span>

                <h1>{selectedShelter.name}</h1>

                <div className="detail-location">
                  <MapPin size={17} />
                  {selectedShelter.area}
                  <span>•</span>
                  {selectedShelter.distance}
                </div>
              </div>

              <div className="readiness-score">
                <span>Readiness</span>
                <strong>{selectedShelter.readiness}%</strong>
              </div>

            </div>

            <p className="shelter-detail-description">
              {selectedShelter.description}
            </p>

            <div className="shelter-detail-grid">

              <div className="detail-card">
                <Users size={22} />
                <span>Available space</span>
                <strong>
                  {selectedShelter.available} people
                </strong>
              </div>

              <div className="detail-card">
                <Clock size={22} />
                <span>Current status</span>
                <strong>{selectedShelter.status}</strong>
              </div>

              <div className="detail-card">
                <Navigation size={22} />
                <span>Distance</span>
                <strong>{selectedShelter.distance}</strong>
              </div>

            </div>

            <div className="facilities-section">

              <h2>Available facilities</h2>

              <div className="detail-facilities">

                <div className={selectedShelter.medical ? "available" : ""}>
                  <HeartPulse size={20} />
                  <span>Medical Support</span>

                  {selectedShelter.medical && (
                    <CheckCircle2 size={18} />
                  )}
                </div>

                <div className={selectedShelter.sanitation ? "available" : ""}>
                  <Bath size={20} />
                  <span>Sanitation</span>

                  {selectedShelter.sanitation && (
                    <CheckCircle2 size={18} />
                  )}
                </div>

                <div className={selectedShelter.privacy ? "available" : ""}>
                  <ShieldCheck size={20} />
                  <span>Privacy Support</span>

                  {selectedShelter.privacy && (
                    <CheckCircle2 size={18} />
                  )}
                </div>

              </div>

            </div>

            <div className="shelter-detail-actions">

              <button className="get-directions">
                <Navigation size={18} />
                Get Directions
              </button>

              <button className="contact-shelter">
                <Phone size={18} />
                Contact Shelter
              </button>

            </div>

          </section>

        </div>

      </main>
    );
  }

  /* =====================================
     SHELTER LIST
     ===================================== */

  return (
    <main className="shelters-page">

      <div className="shelters-container">

        <button
          className="page-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back to SAHAY
        </button>

        <header className="shelters-page-header">

          <span className="section-tag shelter-page-tag">
            <MapPin size={14} />
            LIVE SHELTER NETWORK
          </span>

          <h1>
            Find safety that is
            <span> actually ready.</span>
          </h1>

          <p>
            Explore verified shelters with live readiness,
            available capacity and essential facility information.
          </p>

        </header>

        <div className="shelter-search">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search shelters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="shelter-results">

          <span>
            {filteredShelters.length} shelters available
          </span>

          <span className="live-indicator">
            <i></i>
            Live readiness data
          </span>

        </div>

        <div className="shelter-list">

          {filteredShelters.map((shelter) => (

            <div
              className="shelter-list-card"
              key={shelter.id}
            >

              <div className="shelter-list-top">

                <div className="shelter-list-icon">
                  <MapPin size={22} />
                </div>

                <span className="shelter-status">
                  <span className="status-dot"></span>
                  {shelter.status}
                </span>

              </div>

              <h2>{shelter.name}</h2>

              <div className="shelter-list-location">
                <MapPin size={14} />
                {shelter.area}
              </div>

              <div className="shelter-stats">

                <div>
                  <span>Distance</span>
                  <strong>{shelter.distance}</strong>
                </div>

                <div>
                  <span>Readiness</span>
                  <strong>{shelter.readiness}%</strong>
                </div>

                <div>
                  <span>Available</span>
                  <strong>{shelter.available}</strong>
                </div>

              </div>

              <div className="shelter-readiness-bar">
                <div
                  style={{ width: `${shelter.readiness}%` }}
                ></div>
              </div>

              <div className="shelter-facilities">

                <span>
                  <HeartPulse size={15} />
                  Medical
                </span>

                <span>
                  <Bath size={15} />
                  Sanitation
                </span>

                {shelter.privacy && (
                  <span>
                    <ShieldCheck size={15} />
                    Privacy
                  </span>
                )}

              </div>

              <button
                className="shelter-details-button"
                onClick={() =>
                  navigate(`/shelters/${shelter.id}`)
                }
              >
                View Shelter Details
                <ArrowRight size={17} />
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}

export default Shelters;