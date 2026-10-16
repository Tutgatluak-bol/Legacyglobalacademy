import "./Academics.css";

import academicImage1 from "../../assets/program-1.jpg";
// import academicImage2 from "../../assets/program-2.png";
import academicImage4 from "../../assets/academicImage-4.png"
import academicImage3 from "../../assets/program-2.jpg";

const academicAreas = [
  {
    title: "Learning & Discovery",
    description:
      "Encouraging curiosity, active participation, and a strong foundation for lifelong learning.",
    image: academicImage1,
    imageAlt: "Students learning and exploring new ideas",
  },
  {
    title: "Knowledge & Skills",
    description:
      "Supporting learners as they develop knowledge, practical skills, and independent thinking.",
    image: academicImage4,
    imageAlt: "Learners developing their knowledge and skills",
  },
  {
    title: "Growth & Achievement",
    description:
      "Helping learners build confidence, character, and readiness for future opportunities.",
    image: academicImage3,
    imageAlt: "Learners working toward their educational goals",
  },
];

function Academics() {
  return (
    <section className="academics-section" id="academics">
      <div className="academics-heading">
        <span className="academics-eyebrow">OUR ACADEMICS</span>

        <h2>
          Learning for <span>Every Future</span>
        </h2>

        <p>
          We aim to create a learning environment where curiosity grows,
          knowledge develops, and every learner is encouraged to reach
          their potential.
        </p>
      </div>

      <div className="academics-grid">
        {academicAreas.map((area) => (
          <article className="academics-card" key={area.title}>
            <div className="academics-card-image">
              <img
                src={area.image}
                alt={area.imageAlt}
                loading="lazy"
              />
              {/* <span className="academics-card-number">
                {String(academicAreas.indexOf(area) + 1).padStart(2, "0")}
              </span> */}
            </div>

            <div className="academics-card-content">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Academics;