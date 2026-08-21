import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  UsersRound,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Plus,
  CheckCircle2,
  RefreshCw,
  UserRound,
  ClipboardList,
  ArrowRightLeft,
  Home,
  UserCheck
} from "lucide-react";

function Family() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [updateRequested, setUpdateRequested] = useState(false);
  const [familyMember, setFamilyMember] = useState(null);
  
  const familyMembers = [
  {
    name: "Ananya Sharma",
    relation: "Daughter",
    temporaryId: "SAH-MH-26-8F42X",
    status: "Safe",
    location: "Panvel Relief Centre",
    lastUpdated: "12 minutes ago",
    evacuation: "Successfully evacuated",
    transferStatus: "No transfer currently pending",
    reunionStatus: "Family contact verified"
  },

  {
    name: "Rohan Patil",
    relation: "Brother",
    temporaryId: "SAH-MH-26-3K91P",
    status: "Safe",
    location: "Sector 5 Emergency Shelter",
    lastUpdated: "24 minutes ago",
    evacuation: "Medical support completed",
    transferStatus: "Verified transfer completed",
    reunionStatus: "Family reunification pending"
  },

  {
    name: "Meera Kulkarni",
    relation: "Mother",
    temporaryId: "SAH-MH-26-7M24Q",
    status: "Under Care",
    location: "Kalamboli Community Hall",
    lastUpdated: "8 minutes ago",
    evacuation: "Evacuated and receiving assistance",
    transferStatus: "Transfer verification pending",
    reunionStatus: "Family contact being verified"
  },

  {
    name: "Arjun Deshmukh",
    relation: "Father",
    temporaryId: "SAH-MH-26-5L82R",
    status: "Safe",
    location: "Navi Mumbai Relief Shelter",
    lastUpdated: "31 minutes ago",
    evacuation: "Successfully evacuated",
    transferStatus: "No transfer currently pending",
    reunionStatus: "Family reunified"
  },

  {
    name: "Priya Jadhav",
    relation: "Sister",
    temporaryId: "SAH-MH-26-9Q17M",
    status: "Safe",
    location: "Panvel Community Shelter",
    lastUpdated: "5 minutes ago",
    evacuation: "Successfully evacuated",
    transferStatus: "Transfer completed and verified",
    reunionStatus: "Family contact verified"
  }
];

  function handleSearch(e) {
    e.preventDefault();

    const query = search.trim().toLowerCase();

    if (!query) return;

    const foundMember = familyMembers.find((member) =>
      member.name.toLowerCase().includes(query) ||
      member.temporaryId.toLowerCase().includes(query)
    );

    setFamilyMember(foundMember || null);
    setSearched(true);
    setUpdateRequested(false);
  }

  function requestUpdate() {
    setUpdateRequested(true);
  }

  return (
    <main className="family-page">
      <div className="family-container">

        <button
          className="page-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back to SAHAY
        </button>

        <header className="family-header">
          <span className="section-tag family-tag">
            <UsersRound size={14} />
            FAMILY & EVACUEE STATUS
          </span>

          <h1>
            Know where your
            <span> loved ones are.</span>
          </h1>

          <p>
            Search verified emergency records to check the latest available
            safety, shelter and family reunification status.
          </p>
        </header>

        <section className="family-search-section">
          <div className="family-search-intro">
            <div className="family-search-icon">
              <Search size={24} />
            </div>

            <div>
              <h2>Find a registered person</h2>

              <p>
                Search using a name, family reference or SAHAY Temporary
                Record ID.
              </p>
            </div>
          </div>

          <form
            className="family-search-form"
            onSubmit={handleSearch}
          >
            <Search size={19} />

            <input
              type="text"
              placeholder="Name, family reference or SAH-MH-26..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">
              Search
            </button>
          </form>
        </section>

        {!searched && (
          <section className="family-empty-state">
            <div className="family-empty-icon">
              <ClipboardList size={34} />
            </div>

            <h2>Search for a registered person</h2>

            <p>
              Verified safety, shelter and continuity information will appear
              here when a matching emergency record is found.
            </p>
          </section>
        )}

        {searched && familyMember && (
          <section className="family-result">

            {/* PERSON HEADER */}

            <div className="family-member-header">
              <div className="member-avatar">
                {familyMember.name.charAt(0)}
              </div>

              <div className="member-main-info">
                <span className="verified-member">
                  <ShieldCheck size={14} />
                  VERIFIED EMERGENCY RECORD
                </span>

                <h2>{familyMember.name}</h2>

                <p>{familyMember.relation}</p>
              </div>

              <div className="member-status safe">
                <span className="status-dot"></span>
                {familyMember.status}
              </div>
            </div>

            {/* TEMPORARY RECORD ID */}

            <div className="temporary-record">
              <div className="temporary-record-icon">
                <ClipboardList size={21} />
              </div>

              <div>
                <span>SAHAY TEMPORARY RECORD</span>

                <strong>
                  {familyMember.temporaryId}
                </strong>
              </div>

              <ShieldCheck
                size={20}
                className="temporary-record-check"
              />
            </div>

            {/* STATUS CARDS */}

            <div className="family-status-grid">

              <div className="family-info-card">
                <MapPin size={21} />

                <div>
                  <span>Current verified shelter</span>

                  <strong>
                    {familyMember.location}
                  </strong>
                </div>
              </div>

              <div className="family-info-card">
                <ShieldCheck size={21} />

                <div>
                  <span>Evacuation status</span>

                  <strong>
                    {familyMember.evacuation}
                  </strong>
                </div>
              </div>

              <div className="family-info-card">
                <Clock size={21} />

                <div>
                  <span>Last verified update</span>

                  <strong>
                    {familyMember.lastUpdated}
                  </strong>
                </div>
              </div>

            </div>

            {/* CONTINUITY JOURNEY */}

            <section className="evacuation-journey">

              <div className="journey-heading">
                <div>
                  <span>VERIFIED CONTINUITY RECORD</span>

                  <h3>
                    Evacuation Journey
                  </h3>
                </div>

                <ShieldCheck size={20} />
              </div>

              <div className="journey-steps">

                <div className="journey-step completed">
                  <div className="journey-icon">
                    <UserCheck size={17} />
                  </div>

                  <div>
                    <strong>Rescued</strong>
                    <span>Verified by response team</span>
                  </div>
                </div>

                <div className="journey-line"></div>

                <div className="journey-step completed">
                  <div className="journey-icon">
                    <ClipboardList size={17} />
                  </div>

                  <div>
                    <strong>Registered</strong>
                    <span>Temporary record created</span>
                  </div>
                </div>

                <div className="journey-line"></div>

                <div className="journey-step completed">
                  <div className="journey-icon">
                    <Home size={17} />
                  </div>

                  <div>
                    <strong>Sheltered</strong>
                    <span>Verified shelter assignment</span>
                  </div>
                </div>

                <div className="journey-line"></div>

                <div className="journey-step completed">
                  <div className="journey-icon">
                    <ArrowRightLeft size={17} />
                  </div>

                  <div>
                    <strong>Transfer Status</strong>
                    <span>No transfer pending</span>
                  </div>
                </div>

              </div>

            </section>

            {/* FAMILY REUNIFICATION */}

            <div className="reunification-card">

              <div className="reunification-icon">
                <UsersRound size={23} />
              </div>

              <div>
                <span>FAMILY REUNIFICATION</span>

                <h3>
                  {familyMember.reunionStatus}
                </h3>

                <p>
                  Family contact has been recorded and linked to the
                  verified emergency record.
                </p>
              </div>

              <CheckCircle2 size={22} />

            </div>

            {/* ACTIONS */}

            <div className="family-actions">

              <button
                className={`request-update ${
                  updateRequested ? "requested" : ""
                }`}
                onClick={requestUpdate}
                disabled={updateRequested}
              >
                {updateRequested ? (
                  <>
                    <CheckCircle2 size={18} />
                    Update Requested
                  </>
                ) : (
                  <>
                    <RefreshCw size={18} />
                    Request Status Update
                  </>
                )}
              </button>

              <button className="contact-family">
                <Phone size={18} />
                Contact Response Team
              </button>

            </div>

            {updateRequested && (
              <div className="update-confirmation">
                <CheckCircle2 size={19} />

                <p>
                  A request for the latest verified status has been sent
                  to the authorised response network.
                </p>
              </div>
            )}

          </section>
        )}
        {searched && !familyMember && (
          <section className="family-empty-state">
            <div className="family-empty-icon">
              <Search size={34} />
            </div>

            <h2>No matching record found</h2>

            <p>
             We couldn't find a verified emergency record matching
             that name or SAHAY Temporary Record ID.
            </p>
          </section>
        )}

        <button className="add-family-member">
          <Plus size={19} />
          Add another family member
        </button>

      </div>
    </main>
  );
}

export default Family;