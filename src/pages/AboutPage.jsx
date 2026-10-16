import { Link } from "react-router-dom";
import "./AboutPage.css";

const coreValues = [
  {
    title: "Excellence",
    description:
      "Encouraging learners to pursue knowledge, develop their abilities, and give their best in their learning journey.",
  },
  {
    title: "Integrity",
    description:
      "Promoting honesty, responsibility, respect, and doing what is right in everyday school life.",
  },
  {
    title: "Creativity",
    description:
      "Creating opportunities for learners to think critically, explore ideas, and develop practical skills.",
  },
  {
    title: "Community",
    description:
      "Building a welcoming environment where learners, families, and educators can work together.",
  },
];

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="about-container about-hero__content">
          <span className="about-eyebrow">Get to know us</span>
          <h1>
            More than a school.
            <br />
            <span>A place to grow.</span>
          </h1>
          <p>
            Discover the values, vision, and commitment behind Legacy Global
            Academy — where every learning journey holds the potential for
            something extraordinary.
          </p>
          <div className="about-actions">
            <a href="#our-story" className="about-button about-button--light">
              Discover our story <span aria-hidden="true">↓</span>
            </a>
            <Link to="/contact" className="about-button about-button--outline">
              Contact us
            </Link>
          </div>
        </div>
        <div className="about-hero__footer">
          <span>Legacy Global Academy</span>
          <span>Where Dreams Take Flight</span>
        </div>
      </section>

      <section className="about-section about-story" id="our-story">
        <div className="about-container about-story__grid">
          <div className="about-story__image">
            <img
              src="/about-legacy.jpg"
              alt="School community at Legacy Global Academy"
              loading="lazy"
            />
          </div>
          <div className="about-copy">
            <span className="about-label">Our story</span>
            <h2>
              Every great future begins with <span>learning.</span>
            </h2>
            <p>
              Legacy Global Academy is a school community committed to the
              journey of education, personal development, and lifelong learning.
            </p>
            <p>
              We believe education is about more than acquiring knowledge. It
              is also about developing character, discovering potential,
              nurturing curiosity, and preparing learners for the opportunities
              and responsibilities of the future.
            </p>
            <p>
              Through a supportive learning environment, our aim is to encourage
              every learner to grow in confidence, build valuable skills, and
              pursue their aspirations.
            </p>
            <Link to="/academics" className="about-link">
              Explore our academics <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section about-purpose">
        <div className="about-container">
          <header className="about-section-heading about-section-heading--center">
            <span className="about-label">Our purpose</span>
            <h2>
              Guided by purpose.
              <br />
              <span>Inspired by possibility.</span>
            </h2>
            <p>
              Our direction is shaped by a commitment to learning, character,
              and the potential of every learner.
            </p>
          </header>

          <div className="about-purpose__grid">
            <article className="about-purpose__item">
              <span className="about-label">Our mission</span>
              <h3>Empowering learners through education.</h3>
              <p>
                To support meaningful learning, nurture good character, and
                encourage learners to develop the knowledge, skills, and
                confidence needed to contribute positively to their communities.
              </p>
            </article>
            <article className="about-purpose__item">
              <span className="about-label">Our vision</span>
              <h3>Inspiring a future full of possibilities.</h3>
              <p>
                To aspire to be a learning community that inspires curiosity,
                develops responsible individuals, and prepares learners to
                pursue their dreams and navigate an evolving world.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section about-values">
        <div className="about-container">
          <div className="about-values__heading">
            <div>
              <span className="about-label">What guides us</span>
              <h2>
                Values that shape <span>the journey.</span>
              </h2>
            </div>
            <p>
              The principles we promote help create a positive learning culture
              and guide the way we grow together.
            </p>
          </div>

          <div className="about-values__list">
            {coreValues.map((value, index) => (
              <article className="about-value" key={value.title}>
                <span className="about-value__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="about-philosophy__image">
          <img
            src="/about-learning.jpg"
            alt="Learners taking part in an educational activity"
            loading="lazy"
          />
        </div>
        <div className="about-philosophy__content">
          <span className="about-label">Our approach</span>
          <h2>
            Learning beyond <span>the classroom.</span>
          </h2>
          <p>
            Education becomes more meaningful when learners are encouraged to
            ask questions, develop practical skills, work with others, and
            connect knowledge to the world around them.
          </p>
          <ul>
            <li>A supportive and respectful learning environment</li>
            <li>Opportunities to develop knowledge and skills</li>
            <li>Encouragement to build confidence and character</li>
            <li>A shared commitment to continued growth</li>
          </ul>
          <Link to="/academics" className="about-button about-button--primary">
            Discover our academics <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container about-cta__inner">
          <div>
            <span className="about-eyebrow">Your journey starts here</span>
            <h2>
              Every dream deserves <span>room to grow.</span>
            </h2>
            <p>
              Learn more about Legacy Global Academy and take the next step in
              exploring our school community.
            </p>
          </div>
          <div className="about-cta__actions">
            <Link to="/admissions" className="about-button about-button--light">
              Explore admissions <span aria-hidden="true">→</span>
            </Link>
            <Link to="/gallery" className="about-button about-button--outline">
              View our gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
