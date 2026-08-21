import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  ClipboardList,
  MapPin,
  ShieldCheck,
  Users,
  ArrowRightLeft,
  CheckCircle2,
  Clock,
  UserCheck
} from "lucide-react";

function EvacueeRecords() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);

  const records = [
    {
      id: "SAH-MH-26-8F42X",
      name: "Ananya Sharma",
      shelter: "Panvel Relief Centre",
      status: "Family reunification pending",
      evacuationStatus: "Safely evacuated",
      lastUpdate: "12 minutes ago",
      verification: "Verified"
    },
    {
      id: "SAH-MH-26-3K91P",
      name: "Ravi Patil",
      shelter: "Sector 5 Emergency Shelter",
      status: "Medical support completed",
      evacuationStatus: "Under shelter care",
      lastUpdate: "28 minutes ago",
      verification: "Verified"
    },
    {
      id: "SAH-MH-26-7M24Q",
      name: "Meera Joshi",
      shelter: "Kalamboli Community Hall",
      status: "Transfer verification pending",
      evacuationStatus: "Transfer in progress",
      lastUpdate: "41 minutes ago",
      verification: "Pending"
    },
    {
      id: "SAH-MH-26-5R73K",
      name: "Arjun Deshmukh",
      shelter: "Panvel Relief Centre",
      status: "Awaiting family contact",
      evacuationStatus: "Safely evacuated",
      lastUpdate: "1 hour ago",
      verification: "Verified"
    }
  ];

  const filteredRecords = records.filter((record) => {
    const query = search.toLowerCase();

    return (
      record.id.toLowerCase().includes(query) ||
      record.name.toLowerCase().includes(query) ||
      record.shelter.toLowerCase().includes(query)
    );
  });

  return (
    <main className="records-page">
      <div className="records-container">

        <button
          className="page-back-button"
          onClick={() => navigate("/authority")}
        >
          <ArrowLeft size={18} />
          Back to Command Center
        </button>

        {/* HEADER */}
        <section className="records-header">
          <span className="section-tag records-tag">
            <ClipboardList size={14} />
            AUTHORIZED EVACUEE RECORDS
          </span>

          <h1>
            Continuity through
            <span> verified records.</span>
          </h1>

          <p>
            Track evacuation, shelter assignment, verified transfers and
            family reunification through a temporary SAHAY emergency record.
          </p>
        </section>

        {/* SEARCH */}
        <section className="records-search-card">
          <div className="records-search-copy">
            <div className="records-search-icon">
              <Search size={22} />
            </div>

            <div>
              <h2>Find an evacuee record</h2>
              <p>
                Search using a SAHAY record ID, name or current shelter.
              </p>
            </div>
          </div>

          <div className="records-search-input">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search SAH-MH-26... or name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        {/* RECORD COUNT */}
        <div className="records-count">
          <Users size={18} />
          <span>
            Showing <strong>{filteredRecords.length}</strong> active records
          </span>
        </div>

        {/* RECORDS */}
        <section className="records-list">
          {filteredRecords.map((record) => (
            <button
              className={`record-card ${
                selectedRecord?.id === record.id ? "selected" : ""
              }`}
              key={record.id}
              onClick={() => setSelectedRecord(record)}
            >
              <div className="record-icon">
                <ClipboardList size={22} />
              </div>

              <div className="record-main">
                <span>SAHAY TEMPORARY RECORD</span>
                <h3>{record.id}</h3>
                <p>{record.name}</p>
              </div>

              <div className="record-location">
                <MapPin size={16} />
                <span>{record.shelter}</span>
              </div>

              <div
                className={`record-verification ${
                  record.verification === "Verified"
                    ? "verified"
                    : "pending"
                }`}
              >
                <ShieldCheck size={16} />
                {record.verification}
              </div>
            </button>
          ))}

          {filteredRecords.length === 0 && (
            <div className="records-empty">
              <Search size={30} />
              <h3>No matching record found</h3>
              <p>
                Check the SAHAY record ID, name or shelter and try again.
              </p>
            </div>
          )}
        </section>

        {/* SELECTED RECORD */}
        {selectedRecord && (
          <section className="record-detail">

            <div className="record-detail-header">
              <div>
                <span className="panel-label">
                  SELECTED EMERGENCY RECORD
                </span>

                <h2>{selectedRecord.id}</h2>

                <p>{selectedRecord.name}</p>
              </div>

              <div className="detail-verified">
                <ShieldCheck size={18} />
                {selectedRecord.verification}
              </div>
            </div>

            <div className="record-detail-grid">

              <div className="record-detail-card">
                <MapPin size={20} />

                <div>
                  <span>Current shelter</span>
                  <strong>{selectedRecord.shelter}</strong>
                </div>
              </div>

              <div className="record-detail-card">
                <UserCheck size={20} />

                <div>
                  <span>Evacuation status</span>
                  <strong>{selectedRecord.evacuationStatus}</strong>
                </div>
              </div>

              <div className="record-detail-card">
                <Clock size={20} />

                <div>
                  <span>Last verified update</span>
                  <strong>{selectedRecord.lastUpdate}</strong>
                </div>
              </div>

              <div className="record-detail-card">
                <CheckCircle2 size={20} />

                <div>
                  <span>Current record status</span>
                  <strong>{selectedRecord.status}</strong>
                </div>
              </div>

            </div>

            <div className="record-actions">

              <button className="record-action primary">
                <ShieldCheck size={18} />
                Verify Record
              </button>

              <button className="record-action">
                <ArrowRightLeft size={18} />
                Verify Transfer
              </button>

              <button className="record-action">
                <Users size={18} />
                Update Family Status
              </button>

            </div>

          </section>
        )}
      </div>
    </main>
  );
}

export default EvacueeRecords;