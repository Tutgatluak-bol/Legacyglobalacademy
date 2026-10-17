
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NewsPage.css";

const newsArticles = [
  {
    id: 1,
    category: "School News",
    date: "Latest Updates",
    title: "Welcome to Legacy Global Academy",
    description:
      "Discover our commitment to quality education, character development, and creating opportunities for every learner to succeed.",
    image: "/news-1.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Academics",
    date: "Academic Excellence",
    title: "Building a Strong Foundation for the Future",
    description:
      "Explore our approach to learning, where curiosity, critical thinking, and academic growth help prepare students for tomorrow.",
    image: "/news-2.jpg",
  },
  {
    id: 3,
    category: "Student Life",
    date: "Beyond the Classroom",
    title: "Learning, Growing, and Achieving Together",
    description:
      "Discover how a supportive school community encourages learners to develop confidence, creativity, and teamwork.",
    image: "/news-3.jpg",
  },
  {
    id: 4,
    category: "Announcements",
    date: "School Information",
    title: "Stay Connected with Our School Community",
    description:
      "Visit this page for school announcements, important updates, and information shared with parents and students.",
    image: "/news-4.jpg",
  },
];

const categories = [
  { id: 1, name: "All News" },
  { id: 2, name: "School News" },
  { id: 3, name: "Academics" },
  { id: 4, name: "Student Life" },
  { id: 5, name: "Announcements" },
];

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All News");

  const filteredArticles =
    activeCategory === "All News"
      ? newsArticles
      : newsArticles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="news-hero-overlay" />

        <div className="news-hero-content">
          <span className="news-eyebrow">
            LEGACY GLOBAL ACADEMY
          </span>

          <h1>
            News & <span>Updates</span>
          </h1>

          <p>
            Discover school news, academic highlights, announcements,
            and the moments that make our learning community special.
          </p>

          <div className="news-hero-actions">
            <a href="#latest-news" className="news-primary-btn">
              Explore Latest News
              <span aria-hidden="true">→</span>
            </a>

            <Link to="/contact" className="news-secondary-btn">
              Contact Our School
            </Link>
          </div>
        </div>

        <div className="news-hero-decoration" aria-hidden="true">
          NEWS
        </div>
      </section>

      <section className="news-intro">
        <div className="news-container news-intro-inner">
          <div>
            <span className="news-section-label">
              WHAT'S HAPPENING
            </span>

            <h2>
              Stories from <span>Our Community</span>
            </h2>
          </div>

          <p>
            Stay informed about learning, school activities, important
            announcements, and the journey of our learners.
          </p>
        </div>
      </section>

      <section className="news-listing" id="latest-news">
        <div className="news-container">
          <div className="news-listing-heading">
            <div>
              <span className="news-section-label">
                THE LATEST
              </span>

              <h2>Latest News & Events</h2>
            </div>

            <span className="news-article-count">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          <div
            className="news-filters"
            aria-label="Filter news by category"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`news-filter-btn ${
                  activeCategory === category.name ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.name)}
                aria-pressed={activeCategory === category.name}
              >
                {category.name}
              </button>
            ))}
          </div>

          {activeCategory === "All News" && (
            <article className="news-featured-card">
              <div className="news-featured-image">
                <img
                  src="/news-1.jpg"
                  alt="Students learning in a school environment"
                  loading="lazy"
                />

                <span className="news-featured-badge">
                  Featured Story
                </span>
              </div>

              <div className="news-featured-content">
                <span className="news-card-category">
                  {newsArticles[0].category}
                </span>

                <p className="news-card-date">
                  {newsArticles[0].date}
                </p>

                <h3>{newsArticles[0].title}</h3>

                <p className="news-card-description">
                  {newsArticles[0].description}
                </p>

                <Link to="/about" className="news-read-more">
                  Discover Our School
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          )}

          <div className="news-grid">
            {filteredArticles
              .filter(
                (article) =>
                  activeCategory !== "All News" || !article.featured
              )
              .map((article) => (
                <article className="news-card" key={article.id}>
                  <div className="news-card-image">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                    />

                    <span className="news-image-category">
                      {article.category}
                    </span>
                  </div>

                  <div className="news-card-content">
                    <p className="news-card-date">
                      <span aria-hidden="true">✦</span>
                      {article.date}
                    </p>

                    <h3>{article.title}</h3>

                    <p className="news-card-description">
                      {article.description}
                    </p>

                    <Link
                      to={
                        article.category === "Academics"
                          ? "/academics"
                          : article.category === "Announcements"
                            ? "/admissions"
                            : "/about"
                      }
                      className="news-read-more"
                    >
                      Learn More
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="news-empty">
              No news articles found in this category.
            </p>
          )}
        </div>
      </section>

      <section className="news-community">
        <div className="news-container news-community-inner">
          <div>
            <span className="news-section-label">
              STAY CONNECTED
            </span>

            <h2>
              Be Part of Our <span>Journey</span>
            </h2>

            <p>
              Have a question or need more information about our school?
              We would love to hear from you.
            </p>
          </div>

          <Link to="/contact" className="news-community-btn">
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NewsPage;
