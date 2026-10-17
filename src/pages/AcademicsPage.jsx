
import { Link } from "react-router-dom";
import "./AcademicsPage.css";

import learningImage from "../assets/program-1.jpg";
import skillsImage from "../assets/program-2.jpg";
import growthImage from "../assets/program-3.jpg";

const learningAreas = [
  {
    id: 1,
    title: "Learning & Discovery",
    description:
      "Encouraging curiosity, active participation, and a strong foundation for lifelong learning.",
    image: learningImage,
    alt: "Learning and discovery",
  },
  {
    id: 2,
    title: "Knowledge & Skills",
    description:
      "Supporting learners as they develop knowledge, practical skills, and independent thinking.",
    image: skillsImage,
    alt: "Developing knowledge and skills",
  },
  {
    id: 3,
    title: "Personal Growth",
    description:
      "Encouraging confidence, responsibility, creativity, and preparation for future opportunities.",
    image: growthImage,
    alt: "Personal growth and achievement",
  },
];

function AcademicsPage() {
  return (
    <main className="academics-page">
      <section className="academics-page-hero">
        <div className="academics-page-hero-inner">
          <span className="academics-page-eyebrow">
            LEGACY GLOBAL ACADEMY
          </span>

          <h1>
            Learning Today.
            <span> Leading Tomorrow.</span>
          </h1>

          <p>
            Discover our approach to learning, where knowledge,
            curiosity, and personal development help learners prepare
            for the future.
          </p>

          <div className="academics-page-actions">
            <a
              href="#learning-areas"
              className="academics-primary-button"
            >
              Explore Learning
              <span aria-hidden="true">→</span>
            </a>

            <Link
              to="/contact"
              className="academics-outline-button"
            >
              Contact Our School
            </Link>
          </div>
        </div>

        <div
          className="academics-hero-decoration"
          aria-hidden="true"
        >
          <span className="academics-decoration-circle" />
          <span className="academics-decoration-line" />
        </div>
      </section>

      <section className="academics-intro section-container">
        <div className="academics-intro-image">
          <img
            src={`${import.meta.env.BASE_URL}academic-about.jpg`}
            alt="Learning environment at Legacy Global Academy"
            loading="lazy"
          />

          <div className="academics-image-caption">
            <span className="academics-caption-dot" />
            <span>Where Dreams Take Flight</span>
          </div>
        </div>

        <div className="academics-intro-content">
          <span className="academics-section-label">
            OUR LEARNING APPROACH
          </span>

          <h2>
            Building knowledge.
            <span> Inspiring potential.</span>
          </h2>

          <p>
            Education is about more than memorising information. It is
            also about developing understanding, asking questions,
            solving problems, and learning how to work with others.
          </p>

          <p>
            At Legacy Global Academy, our educational approach aims to
            support learners as they build knowledge, develop
            character, and discover their potential.
          </p>

          <Link to="/about" className="academics-text-link">
            Learn about our school <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        className="academics-learning-section"
        id="learning-areas"
      >
        <div className="section-container">
          <div className="academics-section-heading">
            <span className="academics-section-label">
              LEARNING AT LEGACY
            </span>

            <h2>
              A foundation for <span>the future</span>
            </h2>

            <p>
              We value a learning environment that encourages discovery,
              skill development, and growth.
            </p>
          </div>

          <div className="academics-page-grid">
            {learningAreas.map((area) => (
              <article
                className="academics-page-card"
                key={area.id}
              >
                <div className="academics-page-card-image">
                  <img
                    src={area.image}
                    alt={area.alt}
                    loading="lazy"
                  />
                </div>

                <div className="academics-page-card-body">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academics-values-section">
        <div className="section-container academics-values-inner">
          <div>
            <span className="academics-section-label">
              BEYOND THE CLASSROOM
            </span>

            <h2>
              Education that supports <span>the whole learner.</span>
            </h2>

            <p>
              Learning can help young people develop confidence,
              communicate effectively, think critically, and take
              responsibility for their growth.
            </p>
          </div>

          <div className="academics-values-list">
            <div className="academics-value-item">
              <span>01</span>
              <div>
                <h3>Curiosity</h3>
                <p>
                  Ask questions, explore ideas, and keep learning.
                </p>
              </div>
            </div>

            <div className="academics-value-item">
              <span>02</span>
              <div>
                <h3>Character</h3>
                <p>
                  Develop responsibility, respect, and integrity.
                </p>
              </div>
            </div>

            <div className="academics-value-item">
              <span>03</span>
              <div>
                <h3>Growth</h3>
                <p>
                  Build confidence and prepare for future opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="academics-page-cta">
        <div className="section-container academics-cta-inner">
          <div>
            <span className="academics-cta-eyebrow">
              LEGACY GLOBAL ACADEMY
            </span>

            <h2>Every learning journey begins with a step.</h2>

            <p>
              Get in touch with our school to learn more about Legacy
              Global Academy.
            </p>
          </div>

          <Link to="/contact" className="academics-cta-button">
            Get in Touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AcademicsPage;
