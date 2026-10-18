import { useState } from "react";
import { Link } from "react-router-dom";
import "./StaffPage.css";

const staffMembers = [
  {
    id: 1,
    name: "School Leadership",
    role: "School Administration",
    department: "Leadership",
    image: "/staff-1.png",
    initials: "SL",
    description:
      "Providing leadership, guidance, and direction for the school's educational mission.",
  },
  {
    id: 2,
    name: "Academic Team",
    role: "Academic Coordination",
    department: "Leadership",
    image: "/staff-2.jpg",
    initials: "AT",
    description:
      "Supporting academic planning, effective teaching, and student learning.",
  },
  {
    id: 3,
    name: "Teaching Team",
    role: "Classroom Instruction",
    department: "Teaching",
    image: "/staff-3.jpg",
    initials: "TT",
    description:
      "Helping learners develop knowledge, skills, confidence, and curiosity.",
  },
  {
    id: 4,
    name: "ICT Department",
    role: "Information Technology",
    department: "Teaching",
    image: "/staff-4.jpg",
    initials: "ICT",
    description:
      "Encouraging digital literacy and preparing learners for a technology-driven world.",
  },
  {
    id: 5,
    name: "Student Support",
    role: "Learner Development",
    department: "Support",
    image: "/staff-5.jpg",
    initials: "SS",
    description:
      "Contributing to a welcoming, supportive, and positive learning environment.",
  },
  {
    id: 6,
    name: "School Operations",
    role: "Administrative Support",
    department: "Support",
    image: "/staff-6.jpg",
    initials: "SO",
    description:
      "Helping the school community operate smoothly and efficiently.",
  },
];

const departments = [
  "All Staff",
  "Leadership",
  "Teaching",
  "Support",
];

function StaffPage() {
  const [activeDepartment, setActiveDepartment] = useState("All Staff");

  const filteredStaff =
    activeDepartment === "All Staff"
      ? staffMembers
      : staffMembers.filter(
          (member) => member.department === activeDepartment
        );

  return (
    <main className="staff-page">
      {/* Hero */}
      <section className="staff-hero">
        <div className="staff-hero-overlay" />

        <div className="staff-hero-content">
          <span className="staff-eyebrow">
            THE PEOPLE BEHIND OUR PURPOSE
          </span>

          <h1>
            Meet the People
            <br />
            Who Inspire <span>Greatness.</span>
          </h1>

          <p>
            Great education begins with people who care. Discover the
            dedicated team working to create a supportive environment
            where every learner can grow and thrive.
          </p>

          <div className="staff-hero-actions">
            <a href="#our-team" className="staff-primary-btn">
              Meet Our Team
              <span aria-hidden="true">→</span>
            </a>

            <Link to="/contact" className="staff-outline-btn">
              Contact the School
            </Link>
          </div>
        </div>

        <div className="staff-hero-watermark" aria-hidden="true">
          PEOPLE
        </div>

        <div className="staff-hero-bottom">
          <span>DEDICATION</span>
          <span className="staff-bottom-line" />
          <span>EXCELLENCE</span>
          <span className="staff-bottom-line" />
          <span>INSPIRATION</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="staff-intro">
        <div className="staff-container staff-intro-grid">
          <div className="staff-intro-heading">
            <span className="staff-section-label">
              OUR PEOPLE, OUR STRENGTH
            </span>

            <h2>
              More Than a Team.
              <br />
              <span>A Community.</span>
            </h2>
          </div>

          <div className="staff-intro-copy">
            <p>
              At Legacy Global Academy, the people who support learning
              are central to the school experience. Our staff page
              celebrates the leadership, educators, and support
              professionals who contribute to our school community.
            </p>

            <div className="staff-value-list">
              <div className="staff-value-item">
                <span className="staff-value-icon">01</span>
                <div>
                  <h3>Commitment to Learning</h3>
                  <p>Encouraging academic growth and lifelong learning.</p>
                </div>
              </div>

              <div className="staff-value-item">
                <span className="staff-value-icon">02</span>
                <div>
                  <h3>Care and Respect</h3>
                  <p>Promoting a welcoming and respectful community.</p>
                </div>
              </div>

              <div className="staff-value-item">
                <span className="staff-value-icon">03</span>
                <div>
                  <h3>Shared Purpose</h3>
                  <p>Working together to support every learner's journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="staff-team" id="our-team">
        <div className="staff-container">
          <div className="staff-team-heading">
            <div>
              <span className="staff-section-label">
                THE PEOPLE OF LEGACY
              </span>

              <h2>
                Meet Our <span>Team</span>
              </h2>

              <p>
                Get to know the people who help make our school community
                a place for learning, discovery, and growth.
              </p>
            </div>

            <div className="staff-team-count">
              <span>{filteredStaff.length.toString().padStart(2, "0")}</span>
              <small>
                {activeDepartment === "All Staff"
                  ? "Team profiles"
                  : activeDepartment + " profiles"}
              </small>
            </div>
          </div>

          {/* Department filters */}
          <div className="staff-filters" aria-label="Filter staff by department">
            {departments.map((department) => (
              <button
                key={department}
                type="button"
                className={`staff-filter-btn ${
                  activeDepartment === department ? "active" : ""
                }`}
                onClick={() => setActiveDepartment(department)}
                aria-pressed={activeDepartment === department}
              >
                {department}
              </button>
            ))}
          </div>

          {/* Profile cards */}
          <div className="staff-grid">
            {filteredStaff.map((member, index) => (
              <article
                className="staff-card"
                key={member.id}
                style={{ "--staff-index": index }}
              >
                <div className="staff-card-image">
                  <img
                    src={member.image}
                    alt={`Placeholder photo for ${member.name}`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="staff-image-fallback" aria-hidden="true">
                    {member.initials}
                  </div>

                  <span className="staff-card-number">
                    {String(member.id).padStart(2, "0")}
                  </span>

                  <span className="staff-card-department">
                    {member.department}
                  </span>
                </div>

                <div className="staff-card-content">
                  <span className="staff-card-role">{member.role}</span>

                  <h3>{member.name}</h3>

                  <p>{member.description}</p>

                  <div className="staff-card-footer">
                    <span>Legacy Global Academy</span>
                    <span className="staff-card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="staff-placeholder-note">
            Staff profiles shown here are placeholders. Replace them with
            the school's confirmed names, positions, biographies, and photos
            before publishing.
          </p>
        </div>
      </section>

      {/* School values banner */}
      <section className="staff-mission">
        <div className="staff-mission-decoration" aria-hidden="true" />

        <div className="staff-container staff-mission-inner">
          <div className="staff-mission-mark" aria-hidden="true">
            L
          </div>

          <div className="staff-mission-content">
            <span className="staff-eyebrow">
              ONE SCHOOL. ONE COMMUNITY.
            </span>

            <h2>
              Together, We Help
              <br />
              <span>Dreams Take Flight.</span>
            </h2>

            <p>
              Every learner deserves encouragement, opportunity, and
              an environment where their potential can flourish.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="staff-contact">
        <div className="staff-container staff-contact-inner">
          <div>
            <span className="staff-section-label">
              LET'S CONNECT
            </span>

            <h2>
              Want to Learn More
              <br />
              <span>About Our School?</span>
            </h2>

            <p>
              Contact Legacy Global Academy for more information about
              our school community, academic programmes, and admissions.
            </p>
          </div>

          <div className="staff-contact-actions">
            <Link to="/contact" className="staff-primary-btn">
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>

            <Link to="/admissions" className="staff-text-link">
              Explore Admissions
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StaffPage;