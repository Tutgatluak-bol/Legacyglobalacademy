
import { Link } from "react-router-dom";
import "./AboutPage.css";

const coreValues = [
  {
    number: "01",
    icon: "✦",
    title: "Excellence",
    description:
      "Encouraging learners to pursue knowledge, develop their abilities, and give their best in their learning journey.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Integrity",
    description:
      "Promoting honesty, responsibility, respect, and doing what is right in everyday school life.",
  },
  {
    number: "03",
    icon: "◎",
    title: "Creativity",
    description:
      "Creating opportunities for learners to think critically, explore ideas, and develop practical skills.",
  },
  {
    number: "04",
    icon: "♡",
    title: "Community",
    description:
      "Building a welcoming environment where learners, families, and educators can work together.",
  },
];

function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__overlay" />

        <div className="about-container about-hero__content">
          <span className="about-eyebrow">
            GET TO KNOW US
          </span>

          <h1>
            More Than a School.
            <br />
            <span>A Place to Grow.</span>
          </h1>

          <p>
            Discover the values, vision, and commitment behind
            Legacy Global Academy — where every learning journey
            holds the potential for something extraordinary.
          </p>

          <div className="about-hero__actions">
            <a href="#our-story" className="about-btn about-btn--light">
              Discover Our Story <span aria-hidden="true">↓</span>
            </a>

            <Link
              to="/contact"
              className="about-btn about-btn--outline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="about-hero__bottom">
          <span>Legacy Global Academy</span>
          <span>Where Dreams Take Flight</span>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story" id="our-story">
        <div className="about-container about-story__grid">
          <div className="about-story__visual">
            <img
              src="/about-school.jpg"
              alt="School community at Legacy Global Academy"
              loading="lazy"
            />

            <div className="about-story__floating">
              <span className="about-story__floating-icon">✦</span>
              <div>
                <strong>Where Dreams Take Flight</strong>
                <span>Learning with purpose</span>
              </div>
            </div>

            <div className="about-story__image-accent" />
          </div>

          <div className="about-story__content">
            <span className="about-section-label">
              OUR STORY
            </span>

            <h2>
              Every great future
              <br />
              begins with <span>learning.</span>
            </h2>

            <p>
              Legacy Global Academy is a school community
              committed to the journey of education, personal
              development, and lifelong learning.
            </p>

            <p>
              We believe education is about more than acquiring
              knowledge. It is also about developing character,
              discovering potential, nurturing curiosity, and
              preparing learners for the opportunities and
              responsibilities of the future.
            </p>

            <p>
              Through a supportive learning environment, our aim
              is to encourage every learner to grow in confidence,
              build valuable skills, and pursue their aspirations.
            </p>

            <Link
              to="/academics"
              className="about-text-link"
            >
              Explore our academics <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">
              OUR PURPOSE
            </span>

            <h2>
              Guided by purpose.
              <br />
              <span>Inspired by possibility.</span>
            </h2>

            <p>
              Our direction is shaped by a commitment to learning,
              character, and the potential of every learner.
            </p>
          </div>

          <div className="about-purpose__grid">
            <article className="about-purpose-card about-purpose-card--mission">
              <div className="about-purpose-card__icon" aria-hidden="true">
                ◎
              </div>

              <span className="about-purpose-card__label">
                OUR MISSION
              </span>

              <h3>Empowering learners through education.</h3>

              <p>
                To support meaningful learning, nurture good
                character, and encourage learners to develop the
                knowledge, skills, and confidence needed to
                contribute positively to their communities.
              </p>

              <span className="about-purpose-card__number">01</span>
            </article>

            <article className="about-purpose-card about-purpose-card--vision">
              <div className="about-purpose-card__icon" aria-hidden="true">
                ↗
              </div>

              <span className="about-purpose-card__label">
                OUR VISION
              </span>

              <h3>Inspiring a future full of possibilities.</h3>

              <p>
                To aspire to be a learning community that inspires
                curiosity, develops responsible individuals, and
                prepares learners to pursue their dreams and
                navigate an evolving world.
              </p>

              <span className="about-purpose-card__number">02</span>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-values__heading">
            <div>
              <span className="about-section-label">
                WHAT GUIDES US
              </span>

              <h2>
                Values that shape
                <br />
                <span>the journey.</span>
              </h2>
            </div>

            <p>
              The principles we promote help create a positive
              learning culture and guide the way we grow together.
            </p>
          </div>

          <div className="about-values__grid">
            {coreValues.map((value) => (
              <article
                className="about-value-card"
                key={value.number}
              >
                <div className="about-value-card__top">
                  <span className="about-value-card__icon">
                    {value.icon}
                  </span>

                  {/* <span className="about-value-card__number">
                    {value.number}
                  </span> */}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <div className="about-value-card__line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning philosophy */}
      <section className="about-philosophy">
        <div className="about-philosophy__image">
          <img
            src="/about-learning.jpg"
            alt="Learners taking part in an educational activity"
            loading="lazy"
          />
        </div>

        <div className="about-philosophy__content">
          <span className="about-section-label">
            OUR APPROACH
          </span>

          <h2>
            Learning that reaches
            <br />
            <span>beyond the classroom.</span>
          </h2>

          <p>
            Education becomes more meaningful when learners are
            encouraged to ask questions, develop practical skills,
            work with others, and connect knowledge to the world
            around them.
          </p>

          <ul className="about-philosophy__list">
            <li>
              <span aria-hidden="true">✓</span>
              A supportive and respectful learning environment
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              Opportunities to develop knowledge and skills
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              Encouragement to build confidence and character
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              A shared commitment to continued growth
            </li>
          </ul>

          <Link
            to="/academics"
            className="about-btn about-btn--primary"
          >
            Discover Our Academics <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta__decoration about-cta__decoration--one" />
        <div className="about-cta__decoration about-cta__decoration--two" />

        <div className="about-container about-cta__inner">
          <div>
            <span className="about-eyebrow">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              Every dream deserves
              <br />
              <span>room to grow.</span>
            </h2>

            <p>
              Learn more about Legacy Global Academy and take
              the next step in exploring our school community.
            </p>
          </div>

          <div className="about-cta__actions">
            <Link
              to="/admissions"
              className="about-btn about-btn--light"
            >
              Explore Admissions <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/gallery"
              className="about-btn about-btn--outline"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
